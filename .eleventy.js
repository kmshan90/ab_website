const pluginSass = require("eleventy-plugin-sass");

module.exports = function(eleventyConfig) {
    // config
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPlugin(pluginSass, {
      watch: ['**/*.{scss,sass}', '!node_modules/**'],
      outputDir: "_site/assets/css/",
      autoprefixer: true
    });
    return {
      dir: {
        input: "src/",
        output: "_site",
        includes: "_includes"
      },
      templateFormats: ["html","md","njk", "scss", "css"],
      htmlTemplateEngine: "njk",
      markdownTemplateEngine: "njk",
  
      // 1.1 Enable elventy to pass dirs specified above
      passthroughFileCopy: true
    };
  }

  