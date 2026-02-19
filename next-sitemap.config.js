/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://thearec.com", // change if different
  generateRobotsTxt: true, // creates robots.txt automatically

  changefreq: "weekly",
  priority: 0.7,

  sitemapSize: 7000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
