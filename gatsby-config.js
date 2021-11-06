require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatbsyLesson",
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      apiKey: process.env.CLOUDINARY_API_KEY,
      apiSecret: process.env.CLOUDINARY_API_SECRET,
      resourceType: `image`,
      prefix: `gatsbyLesson/`
      }
  }
    
  
  ],
};
