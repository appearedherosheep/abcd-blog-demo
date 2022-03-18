// const { createFilePath } = require("gatsby-source-filesystem");

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === `MarkdownRemark`) {
//     // Turn markdown files in our `posts` directory into `/post/slug`
//     // const relativeFilePath = createFilePath({
//     //   node,
//     //   getNode,
//     //   basePath: `posts`,
//     // });
//     // createNodeField({
//     //   node,
//     //   name: `slug`,
//     //   value: `/posts${relativeFilePath}`,
//     // });
//     const slug = createFilePath({ node, getNode });
//     createNodeField({ node, name: "slug", value: slug });
//   }
// };

// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);

//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: path.resolve(`./src/templates/Post.js`),
//       context: {
//         slug: node.fields.slug,
//       },
//     });
//   });
// };

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type);
// };

// exports.onCreateNode = ({ node }) => {
//   if (node.internal.type === `MarkdownRemark`) {
//     console.log(node.internal.type);
//   }
// };
