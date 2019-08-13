const path = require("path");
// const webpack = require("webpack");

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "/",
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_com", resolve("src/components"))
      .set("_api", resolve("src/api"))
      .set("_views", resolve("src/views"));
    /*
  // 富文本编辑器引用模块
  config.plugin("provide").use(webpack.ProvidePlugin, [
    {
      "window.Quill": "quill/dist/quill.js",
      Quill: "quill/dist/quill.js"
    }
  ]);
  */
  },
  devServer: {
    open: true,
    host: "0.0.0.0", // localhost  192.168.1.24  localhost
    port: 9000,
    https: false,
    hotOnly: false,
    /*proxy: {
      "/system": {
        target: "http://192.168.1.20:7666/manager/system/", // 登录
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/system": ""
        }
      },
    }*/
  },
  parallel: require("os").cpus().length > 1,
  lintOnSave: false
};
