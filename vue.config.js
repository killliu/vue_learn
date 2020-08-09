module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '',
  productionSourceMap: true,    // 生成环境时改为 false, 以减少debug相关信息，从而减小包体
  // configureWebpack: ()=>{},     // webpack 配置
  // chainWebpack: ()=>{},
  // css:{
  //   modules: false,             // 启用 css modules
  //   extract: true,              // 是否使用 css 分离插件
  //   sourceMap: false,           // 开启 css source maps ?
  //   loaderOptions:{}            // css 预设器配置项
  // },
  // // webpack-dev-server 相关配置
  devServer:{
    // host: '0.0.0.0',
    port: 8081,
    open: true,
    // proxy: {},
  },
  // // 第三方插件配置
  // pluginOptions:{
  //
  // }
}