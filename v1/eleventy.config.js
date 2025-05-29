export default function config(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("projects/**/*");
  eleventyConfig.addPassthroughCopy("resume/**/*");
  eleventyConfig.addPassthroughCopy("resources/**/*");
  eleventyConfig.addPassthroughCopy({
    "../_shared/dock.js": "shared/dock.js",
    "../_shared/plaques.js": "shared/plaques.js",
  });
}
