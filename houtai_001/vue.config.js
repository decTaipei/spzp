const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000,
    proxy: {
      "/api": {
        // target: "http://192.168.0.183:8099",
        // target: "http://81.69.5.67:8090",
        target: "http://127.0.0.1:5000/",
        pathRewrite: { "^/api": "" },
        ws: true,
        changeOrigin: true,
        secure: false,
        base: "/api",
      },
    },
  },
});


