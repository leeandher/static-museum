import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  siteMetadata: {
    title: `leander.xyz`,
    siteUrl: `https://leander.xyz`,
    repository: `https://github.com/leeandher/leander.xyz`,
    description: `The complete portfolio of Leander Rodrigues, a Toronto-based full-stack web developer and undergrad Engineer at the University of Waterloo.`,
  },
  plugins: [
    // Styling
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#FFFFFF`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-styled-components`,

    // Data
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: join(__dirname, `static/assets`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: `language-`,
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: join(__dirname, `src/pages/blog`),
        ignore: [`**/*\.js`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: join(__dirname, `src/pages/notes`),
        ignore: [`**/*\.js`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: join(__dirname, `src/pages/projects`),
        ignore: [`**/*\.js`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `shared`,
        path: join(__dirname, `../_shared`),
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-pnpm`,
  ],
};
