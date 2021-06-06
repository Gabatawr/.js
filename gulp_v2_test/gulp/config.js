const srcPath = 'src';
const destPath = 'dest';

const config = {
    src: {
        root: srcPath,
        sass: `${srcPath}/scss`,
        js: `${srcPath}/js`,
        fonts: `${srcPath}/assets/fonts`,
        images: `${srcPath}/assets/images`,
        iconMono: `${srcPath}/assets/icons/mono`,
        iconMulti: `${srcPath}/assets/icons/multi`,
        pug: `${srcPath}/pug`,
    },
    dest: {
        root: destPath,
        html: destPath,
        css: `${destPath}/css`,
        js: `${destPath}/js`,
        fonts: `${destPath}/fonts`,
        images: `${destPath}/images`,
    },

    setEnv() {
        this.isProd = process.argv.includes('--prod');
        this.isDev = !this.isProd;
    }
};

export default config;