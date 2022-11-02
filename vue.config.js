const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg").set("generator", {
      filename: "[name][ext]",
      publicPath:"../assets/"
    });

    // clear all existing loaders.
    // if you don't do this, the loader below will be appended to
    // existing loaders of the rule.
    svgRule.uses.clear();

    // add replacement loader(s)
    svgRule
      .use("file-loader")
      .loader("file-loader")
      .tap((options) => {
        const opts = options || {};
        opts.name = "/assets/[name].[ext]";
        opts.outputPath = "";
        return opts;
      })
      .end();
  },
});
