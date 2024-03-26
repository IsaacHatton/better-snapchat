const ESBuild = require('esbuild');
const EsbuildPluginImportGlob = require('esbuild-plugin-import-glob');
const CSSModulesPlugin = require('esbuild-css-modules-plugin');
const package = require('../package.json');
const fs = require('fs/promises');
const alias = require('esbuild-plugin-alias');

(async () => {
  console.log('Building: Chrome Extension');

  await ESBuild.build({
    entryPoints: ['./src/script'],
    bundle: true,
    minify: true,
    sourcemap: false,
    target: ['chrome58'],
    outbase: './src/',
    outdir: './public/build/',
    logLevel: 'info',
    plugins: [
      EsbuildPluginImportGlob.default(),
      CSSModulesPlugin(),
      alias({
        react: require.resolve('preact/compat'),
        'react-dom': require.resolve('preact/compat'),
      }),
    ],
  });

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
        matches: ['https://*.snapchat.com/*'],
        js: ['./build/script.js'],
        css: ['./build/script.css'],
        run_at: 'document_start',
        world: 'MAIN',
      },
    ],
    host_permissions: ['https://*.snapchat.com/*'],
    browser_specific_settings: { gecko: { id: 'extension@better-snapchat.com' } },
  };

  await fs.writeFile('./public/manifest.json', JSON.stringify(manifest, null, 2));
})();
