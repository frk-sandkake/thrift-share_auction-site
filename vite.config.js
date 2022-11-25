const { resolve } = require('path');

export default {
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'src/index.html'),
            },
        },
        outDir: '../dist',
        emptyOutDir: true,
    },
    resolve: {
        alias: {},
    },
};
