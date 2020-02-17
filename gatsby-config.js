/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Overpass`,
            variants: [`300`,`400`, `800`],
          },
          {
            family: `Overpass`,
            subsets: [`latin`],
          },
        ],
      },
    },
  ],
}
