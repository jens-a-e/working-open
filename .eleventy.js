module.exports = function (eleventyConfig) {
    return {
        templateFormats: ["html", "md", "njk"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    }
};