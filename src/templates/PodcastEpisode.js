import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import MetaTags from '../components/MetaTags';

const PodcastEpisode = ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
        <Layout location={location} title={siteTitle}>
            <MetaTags
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
            />

            <article>
                <header>
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>

            <nav>
                {previous && (
                    <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                    </Link>
                )}

                {next && (
                    <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                    </Link>
                )}
            </nav>
        </Layout>
    );
};

export default PodcastEpisode;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 160)
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
            }
        }
    }
`;
