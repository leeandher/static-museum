export default function config(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("Build/**/*");
  eleventyConfig.addPassthroughCopy("TemplateData/**/*");
}
