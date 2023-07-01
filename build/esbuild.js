const fs = require('fs');
const path = require('path');
const process = require('node:process');
const esbuild = require('esbuild');
const recursiveReadSync = require('recursive-readdir-sync');


const isWatchMode = process.argv.includes('--watch');
const isProductionMode = process.argv.includes('--prod');

const srcMainFile = path.resolve(__dirname, '..', 'main.ts');
const publicMainFile = path.resolve(__dirname, '..', 'public', 'js', 'main.ts');

const publicEsBuildOptions = {
    platform: 'browser',
    entryPoints: [publicMainFile],
    target: 'es2020',
    outdir: path.dirname(publicMainFile),
    sourcemap: !isProductionMode,
    tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
    bundle: true,
    minify: isProductionMode,
}

const srcEsBuildOptions = {
    platform: 'node',
    entryPoints: [srcMainFile],
    outdir: path.dirname(srcMainFile),
    sourcemap: true,
    tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
    bundle: true,
    minify: isProductionMode,
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