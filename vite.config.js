const { resolve } = require('path');

export default {
    root: resolve(__dirname, 'src'),
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'src/index.html'),
                single: resolve(__dirname, 'src/single-item.html'),
                profile: resolve(__dirname, 'src/profile.html'),
            },
        },
        outDir: '../dist',
        emptyOutDir: true,
    },
    resolve: {
        alias: {},
    },
};
