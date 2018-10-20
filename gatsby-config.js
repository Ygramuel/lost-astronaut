module.exports = {
  siteMetadata: {
    title: `Lost Astronaut`,
    siteUrl: `https://lost-astronaut.netlify.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    `gatsby-plugin-less`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: []
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allSitePage (
            filter: {
              path: {
                regex: "/^(?!\/(dev-404-page|404|offline-plugin-app-shell-fallback)).*$/"
              }
            }
          ){
            edges {
              node {
                path
              }
            }
          }
      }`
      }
    },

    /// TODO add more options
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lost Astronaut",
        short_name: "LA",
        start_url: "/",
        background_color: "#434663",
        theme_color: "#ff6666",
        lang: "de",
        display: "standalone",
        icons: [
            {
                src: "/favicons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png"
            },
            {
                src: "/favicons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png"
            }
        ],
      }
    },
    'gatsby-plugin-offline',

    {  // make sure to put last in the array
     resolve: `gatsby-plugin-netlify`,
     options: {
        headers: {
          // CSP rule for all "normal" Pages
         "/*": [
          "Content-Security-Policy: default-src 'self' data:; script-src 'self' 'unsafe-inline' ; style-src 'self' 'unsafe-inline' ; base-uri 'none'; manifest-src 'self';",
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          "X-Frame-Options: SAMEORIGIN",
          "Referrer-Policy: no-referrer",
        ],
          // The CSM is special, do not use CSP there
        "/admin/*": [
          "Content-Security-Policy: default-src * 'unsafe-inline'"
        ],
        "/kontaktFormParanoid/*": [
          "Content-Security-Policy: default-src 'none'; base-uri 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'self';"
        ],
      },
       //headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
       //allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
       mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
     },
   }
  ]
};
