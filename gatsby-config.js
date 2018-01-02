module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
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
        display: "minimal-ui",
      }
    },
    'gatsby-plugin-offline',

    {  // make sure to put last in the array
     resolve: `gatsby-plugin-netlify`,
     options: {
        headers: {
          // CSP rule for all "normal" Pages
        "/*": [
          "Content-Security-Policy: default-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
        ],
          // The CSM is special, do not use CSP there
        "/admin/*": [
          "Content-Security-Policy: default-src * 'unsafe-inline'"
        ],
      },
       //headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
       //allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
       mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers (disabled by default, until gzip is fixed for server push)
     },
   }
  ]
};
