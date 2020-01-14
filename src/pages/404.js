import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import MetaTags from "../components/MetaTags";

const Error404 = ({ data }) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={this.props.location} title={siteTitle}>
            <MetaTags title="404: Not Found" />

            <h1>Not Found</h1>

            <p>
                You just hit a route that doesn&#39;t exist... the sadness.
            </p>
        </Layout>
    );
}

export default Error404;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
