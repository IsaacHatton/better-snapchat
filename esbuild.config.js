const ESBuild = require('esbuild');
const EsbuildPluginImportGlob = require('esbuild-plugin-import-glob');
const CSSModulesPlugin = require('esbuild-css-modules-plugin');
const package = require('./package.json');
const fs = require('fs/promises');
const postCssPlugin = require('esbuild-style-plugin');
const { tailwindPlugin } = require('esbuild-plugin-tailwindcss');
const postcss = require('postcss');

(async () => {
  console.log('Building: Content & Script');

  await ESBuild.build({
    entryPoints: ['./src/content', './src/script'],
    bundle: true,
    minify: true,
    sourcemap: false,
    target: ['chrome58', 'firefox57'],
    outbase: './src/',
    outdir: './public/build/',
    logLevel: 'info',
    plugins: [EsbuildPluginImportGlob.default(), CSSModulesPlugin(), tailwindPlugin()],
  });

  console.log('Building: Manifest');

  const manifest = {
    manifest_version: 3,
    name: 'Better Snapchat',
    description: package.description,
    version: package.version,
    icons: {
      32: 'logo32.png',
      48: 'logo48.png',
      96: 'logo96.png',
      128: 'logo128.png',
    },
    content_scripts: [
      {
        matches: ['https://web.snapchat.com/*'],
        js: ['./build/content.js'],
        css: ['./build/script.css'],
        run_at: 'document_start',
      },
    ],
    web_accessible_resources: [{ resources: ['build/script.js'], matches: ['https://web.snapchat.com/*'] }],
    host_permissions: ['https://web.snapchat.com/*'],
  };

  await fs.writeFile('./public/manifest.json', JSON.stringify(manifest, null, 2));
})();
