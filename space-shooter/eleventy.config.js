export default function config(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("Build/**/*");
  eleventyConfig.addPassthroughCopy("TemplateData/**/*");
  eleventyConfig.addPassthroughCopy({
    "../_shared/plaques.js": "shared/plaques.js",
  });
}
