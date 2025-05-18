import React from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { Location } from "@reach/router";

import seo from "../data/seo.json";

const DEFAULT_IMAGE = "https://dev.leander.xyz/icons/logo-s.png";

const SEOBundle = ({
  description,
  image = DEFAULT_IMAGE,
  profile,
  title,
  theme,
}) => {
  const seoTitle = title != null ? title : seo[profile].title;
  const seoDescription =
    description != null ? description : seo[profile].description;
  return (
    <Location>
      {({ location: { href: url } }) => (
        <Helmet>
          {/* Generic */}
          <title>{seoTitle}</title>
          <meta name="description" content={seoDescription} />

          {/* Open Graph */}
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={seoDescription} />
          <meta property="og:site_name" content="leander.xyz" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={image} />
          <meta property="og:image:height" content={320} />
          <meta property="og:image:width" content={320} />

          {/* Iconography */}
          <meta name="theme-color" content={theme.shade.darkest} />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
        </Helmet>
      )}
    </Location>
  );
};

export default SEOBundle;
