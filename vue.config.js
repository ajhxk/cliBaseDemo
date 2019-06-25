module.exports = {
    // 项目部署 相对路径
    publicPath: '/A/dist',

    // build 文件夹名称
    outputDir: 'dist',

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: 'static',

    // 指定项目入口文件 default: index.html
    indexPath: 'A.html',

    // 生成的静态资源在它们的文件名中包含了 hash以便更好的控制缓存
    filenameHashing: true,

    // 多页配置
    pages: undefined,
    /*
        index: {
        // page 的入口
        entry: 'src/index/main.js',
        // 模板来源
        template: 'public/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: 'Index Page',
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    */

    // 'error' 会将错误输出到浏览器 true时会输出到控制台    
    lintOnSave: 'error',

    // 是否使用包含运行时编译器的 Vue 构建版
    runtimeCompiler: false,

    // 需要被babel转译的目录
    transpileDependencies: [],

    // 生成是否需要sourceMap
    productionSourceMap: true,

    // 配置crossOrigin信息 https://www.jianshu.com/p/d68d7992cce1
    crossorigin: undefined,

    // 配置 SRI:https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity
    integrity: false,

    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
    // 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    // https://cli.vuejs.org/zh/guide/webpack.html#%E7%AE%80%E5%8D%95%E7%9A%84%E9%85%8D%E7%BD%AE%E6%96%B9%E5%BC%8F
    configureWebpack: undefined,

    // 
    chainWebpack: undefined,

    css: {
        // css模块化配置
        modules: false,

        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)
        extract: process.env.NODE_ENV === 'production' ? true : false,

        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
        sourceMap: false,

        //向 CSS 相关的 loader 传递选项
        loaderOptions: {}
    },

    devServer: {
        port: 8080,
        proxy: {
            '/apiA': {
                target: 'urlA'
            }
        }
    }


}