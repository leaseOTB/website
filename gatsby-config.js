module.exports = {
  siteMetadata: {
    title: `Lease on the Block`,
    description: `Helping New York find and keep affordable housing using Ethereum blockchain technology.`,
    author: `@zachdt`,
    siteUrl: `https://leaseontheblock.care`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `text`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lease on the Block`,
        short_name: `LeaseOTB`,
        start_url: `/`,
        background_color: `#250A3C`,
        theme_color: `#E86D48`,
        display: `minimal-ui`,
        icon: `src/images/platform-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        //selector: '[data-sal]', // Selector of the elements to be animated
        //animateClassName: 'sal-animate', // Class name which triggers animation
        //disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        //rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        //enterEventName: 'sal:in', // Enter event name
        //exitEventName: 'sal:out', // Exit event name
      },
    },
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        stylesConfig: {
          // disableAutoprefixing: true,
          // disableMinification: true
        },
      },
    },
    `gatsby-plugin-smoothscroll`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
