// const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

// // import { defineConfig } from 'vite';

// export default {
//     root: 'src/',
//     publicDir: '../static/',
//     base: './',
//     server:
//     {
//         port: 5000,
//         host: '0.0.0.0',
//         // open: !isCodeSandbox, // Open if it's not a CodeSandbox
//         proxy: {
//             '/api': 'http://localhost:5000',
//         },
//     },
//     build:
//     {
    
//         outDir: '../dist',
//         emptyOutDir: true,
//         sourcemap: true,
        
//     }
    
// }

const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    root: 'src/',
    publicDir: '../static/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    build:
    {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    }
}