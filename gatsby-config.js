module.exports = {
  siteMetadata: {
    title: "Gatsby Camp Otter Creek",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://campottercreek.mindstaging.com/graphql",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
        resolve: 'gatsby-source-gravityforms',
        options: {
            baseUrl: 'http://campottercreek.mindstaging.com',
            include: [4], // Array of form IDs. Will only import these forms.
            api: {
                key: process.env.CONSUMER_KEY,
                secret: process.env.CONSUMER_SECRET,
            },
        },
    },
  ],
};
