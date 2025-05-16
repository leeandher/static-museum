export default function config(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("projects/**/*");
  eleventyConfig.addPassthroughCopy("resume/**/*");
  eleventyConfig.addPassthroughCopy("resources/**/*");
  eleventyConfig.addPassthroughCopy({
    "../shared/dock.js": "shared/dock.js",
  });
}
