const path = require("node:path");
const process = require("node:process");
const esCustomSassBuilder = require("../plugins/sass/es-custom-sass-builder");

const isProductionMode = process.argv.includes('--prod');
const srcMainFile = path.resolve(__dirname, '..', '..', 'main.ts');

module.exports = {
    platform: 'node',
    entryPoints: [srcMainFile],
    outdir: path.dirname(srcMainFile),
    sourcemap: true,
    tsconfig: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
    bundle: true,
    minify: isProductionMode,
    plugins: [esCustomSassBuilder(false)],
};