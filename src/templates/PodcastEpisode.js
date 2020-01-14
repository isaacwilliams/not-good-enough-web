import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import MetaTags from '../components/MetaTags';
import PostDate from '../components/PostDate';
import PodcastEpisodeSummary from '../components/PodcastEpisodeSummary';

const BodyText = styled.div`
    margin: 2rem 0 3rem 0;
`;

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
                <PodcastEpisodeSummary
                    isMainListing
                    slug={post.fields.slug}
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    number={post.frontmatter.number}
                    summary={post.frontmatter.description}
                />

                <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
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
            fields {
                slug
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
                number
            }
        }
    }
`;
