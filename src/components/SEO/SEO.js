import React, { Component } from "react";
import Helmet from "react-helmet";

import config from "../../../data/SiteConfig.json";

class SEO extends Component {
  render() {
    const { path, title, description, image } = this.props;

    const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
    const blogImage = config.siteUrl + realPrefix + image;
    const blogURL = config.siteUrl + config.pathPrefix;
    const postURL = blogURL + path;

    // TODO
    const postSEO = false
    
    const schemaOrgJSONLD = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ""
      }
    ];
    if (postSEO) {
      schemaOrgJSONLD.push([
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                blogImage
              }
            }
          ]
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
          headline: title,
          image: {
            "@type": "ImageObject",
            url: blogImage
          },
          description
        }
      ]);
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta name="description" content={description} />
        <meta name="image" content={blogImage} />

        {/* Schema.org tags */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgJSONLD)}
        </script>

        {/* OpenGraph tags */}
        <meta property="og:url" content={blogURL} />
        {/* postSEO ? <meta property="og:type" content="article" /> : null */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={blogImage} />
        <meta
          property="fb:app_id"
          content={config.siteFBAppID ? config.siteFBAppID : ""}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:creator"
          content={config.userTwitter ? config.userTwitter : ""}
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={blogImage} />
      </Helmet>
    );
  }
}

export default SEO;
