import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import * as colors from '../styles/colors';

import Layout from '../components/layout';
import MetaTags from '../components/MetaTags';

import PodcastEpisodeSummary from '../components/PodcastEpisodeSummary';
import BodyText from '../components/BodyText'; 

const Title = styled.h1`
    margin: 1rem 0;
`;


const Divider = styled.hr`
    border: 0;
    border-top: 1px solid ${colors.foregroundTertiary};
    margin: 2rem;
`;

const EpisodeNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;

    .next {
        margin-right: auto;
    }

    .prev {
        margin-left: auto;
    }
`;


const PodcastEpisode = ({ data, pageContext, location }) => {
    const post = data.markdownRemark;
    const siteTitle = data.site.siteMetadata.title;

    const { previous, next } = pageContext;

    return (
        <Layout location={location} title={siteTitle}>
            <MetaTags
                title={`Not Good Enough - ${post.frontmatter.title}`}
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
                    fileLink={post.frontmatter.fileLink}
                />

                <BodyText dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>

            <EpisodeNav>
                {next && (
                    <Link to={next.fields.slug} rel="next" className="next">
                        ← {next.frontmatter.title} →
                    </Link>
                )}

                {previous && (
                    <Link to={previous.fields.slug} rel="prev" className="prev">
                        {previous.frontmatter.title} →
                    </Link>
                )}
            </EpisodeNav>
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
                fileLink
            }
        }
    }
`;
