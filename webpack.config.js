module.exports = {
    chainWebpack: config => {
      const langs = ["css", "postcss", "scss", "sass", "less", "stylus"];
      const matches = ["vue-modules", "vue", "normal-modules", "normal"];
  
      langs.forEach(lang =>
        matches.forEach(match => {
          config.module
            .rule(lang)
            .oneOf(match)
            .use("cssnano")
            .before('postscss-loader')
        })
      );
    }
  }