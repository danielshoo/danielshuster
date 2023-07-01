const fs = require('fs');
const path = require('path');
const process = require('node:process');
const sass = require('sass');
const esbuild = require('esbuild');
const esSassPlugin = require("esbuild-plugin-sass");


const isWatchMode = process.argv.includes('--watch');
const isProductionMode = process.argv.includes('--prod');

const srcMainFile = path.resolve(__dirname, '..', 'main.ts');
const publicMainFile = path.resolve(__dirname, '..', 'public', 'react-pages', 'main.ts');

const publicEsBuildOptions = {
    platform: 'browser',
    entryPoints: [publicMainFile],
    target: 'es2020',
    outdir: path.dirname(publicMainFile),
    sourcemap: !isProductionMode,
    tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
    bundle: true,
    minify: isProductionMode,
    plugins: [esSassPlugin()],
}

const srcEsBuildOptions = {
    platform: 'node',
    entryPoints: [srcMainFile],
    outdir: path.dirname(srcMainFile),
    sourcemap: true,
    tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
    bundle: true,
    minify: isProductionMode,
    plugins: [{
        name: 'sassToString',
        setup: function (build) {

            build.onResolve({ filter: /.scss$/ }, args => {

                const sourceFullPath = require.resolve(args.path, {
                    paths: [args.resolveDir],
                });

                return {
                    path: sourceFullPath,
                    namespace: 'file',
                };
            });

            build.onLoad({ filter: /.s[ac]ss$/, namespace: 'file' }, (args) => {

                const scssString = fs.readFileSync(args.path, {encoding: 'utf-8'});
                const scssFileContents = sass.compileString(scssString);

               return {
                   contents: `module.exports = ${JSON.stringify(scssFileContents.css)}`
               };
            });
        }
    }],
};

if (isWatchMode) {
    (async () => {
        const esbuildCTX = await esbuild.context(srcEsBuildOptions);
        await esbuildCTX.watch().then(() => {
            console.log('Watching for changes...');
        });
        const publicEsbuildCTX = await esbuild.context(publicEsBuildOptions);
        await publicEsbuildCTX.watch().then(() => {
            console.log('Watching for public changes...');
        });
    })();
} else {
    esbuild.build(srcEsBuildOptions).catch(() => process.exit(1));
    esbuild.build(publicEsBuildOptions).catch(() => process.exit(1));
}