import * as esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['src/postal-mime.js'],
    bundle: true,
    minify: true,
    sourcemap: false,
    platform: 'browser',
    target: ['es2020'],
    format: 'iife',
    globalName: 'PostalMimeLib',
    outfile: 'dist/emlreader.min.js',
    footer: {
        js: 'var PostalMime = PostalMimeLib.default;'
    }
});

console.log('Built dist/emlreader.min.js');
