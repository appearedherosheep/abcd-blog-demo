import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export function About({ data }) {
  return (
    <Layout>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>hello world</p>
    </Layout>
  );
}
export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
