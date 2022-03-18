module.exports = {
  siteMetadata: {
    siteUrl: `https://.cbshabcd.github.io`,
    title: "ABCD",
    language: "ko",
    // ogImage: '공유할 때 보이는 미리보기 페이지, static하위에 넣기'
  },
  plugins: [
    //   {
    //     resolve: `gatsby-source-filesystem`,
    //     options: {
    //       name: `contents`,
    //       path: `${__dirname}/contents`,
    //     },
    //   },
    //   `gatsby-transformer-remark`,
    //   {
    //     resolve: `gatsby-source-filesystem`,
    //     options: {
    //         name: `src`,
    //         path: `${__dirname}/src/`,
    //     },
    // },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/contents`,
      },
    },
  ],
};
