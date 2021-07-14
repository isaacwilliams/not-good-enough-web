/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const MetaTags = ({ description, lang, meta, title, shareImage }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        shareImage
                        siteUrl
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const image = shareImage || site.siteMetadata.shareImage;

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title || site.siteMetadata.title}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: image,
                },
                {
                    property: `og:image:width`,
                    content: 1600,
                },
                {
                    property: `og:image:height`,
                    content: 1600,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
            ].concat(meta)}
        >
            <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196" />
            <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/favicon-128.png" sizes="128x128" />
        </Helmet>
    );
};

MetaTags.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

MetaTags.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};

export default MetaTags;
