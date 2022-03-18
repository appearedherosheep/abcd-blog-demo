// import React from "react"
// import { graphql } from "gatsby"

// export default function Post({data}) {
//   const { markdownRemark: { frontmatter, html } } = data;
//   return (
//     <div>
//         <h1>{frontmatter.title}</h1>
//         <h2>{frontmatter.date}</h2>
//         <div
//           dangerouslySetInnerHTML={{ __html: html }}
//         />
//     </div>
//   )
// }


// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `