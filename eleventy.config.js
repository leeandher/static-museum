export default function config(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("v1/resources/**/*");
}
