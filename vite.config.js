const { resolve } = require('path');

export default {
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'src/index.html'),
                single: resolve(__dirname, 'src/single-item.html'),
            },
        },
        outDir: '../dist',
        emptyOutDir: true,
    },
    resolve: {
        alias: {},
    },
};
