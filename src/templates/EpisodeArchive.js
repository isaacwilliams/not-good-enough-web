import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { fontDisplay } from '../styles/fonts';
import * as colors from '../styles/colors';

import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags';
import PodcastEpisodeSummary from '../components/PodcastEpisodeSummary';
import BodyText from '../components/BodyText';

const Title = styled.h1`
    ${fontDisplay}
    padding-bottom: 3rem;
    text-align: center;
`;

const EpisodeListNav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding-top: 3rem;

    .prev {
        margin-right: auto;
    }

    .next {
        margin-left: auto;
    }
`;

const PodcastIndex = ({ data, location, pageContext: { currentPage, numPages, skip } }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const mainArticle = currentPage === 1 ? posts[0]?.node : null;

    const archiveList = !!mainArticle ? posts.slice(1) : posts;

    return (
        <Layout location={location} title={siteTitle} largeHeader>
            <MetaTags title={`${siteTitle} — All episodes`} />

            {mainArticle && (
                <article>
                    <PodcastEpisodeSummary
                        isMainListing
                        slug={mainArticle.fields.slug}
                        title={mainArticle.frontmatter.title}
                        date={mainArticle.frontmatter.date}
                        number={mainArticle.frontmatter.number}
                        summary={mainArticle.frontmatter.description}
                        fileLink={mainArticle.frontmatter.fileLink}
                    />

                    <BodyText dangerouslySetInnerHTML={{ __html: mainArticle.html }} />
                </article>
            )}

            <Title>
                All episodes
            </Title>

            {archiveList.map(({ node }) => {
                const slug = node.fields.slug;
                const title = node.frontmatter.title || node.fields.slug;
                const date = node.frontmatter.date;
                const number = node.frontmatter.number;
                const summary = node.frontmatter.description || node.excerpt;
                const fileLink = node.frontmatter.fileLink;

                return (
                    <PodcastEpisodeSummary
                        key={slug}
                        slug={slug}
                        title={title}
                        date={date}
                        number={number}
                        summary={summary}
                    />
                );
            })}

            <EpisodeListNav>
                {currentPage > 1 && (
                    <Link to={currentPage <= 2 ? '/' : `/page/${currentPage - 1}`} rel="prev" className="prev">
                        ← More recent episodes
                    </Link>
                )}

                {currentPage < numPages && (
                    <Link to={`/page/${currentPage + 1}`} rel="next" className="next">
                        Older episodes →
                    </Link>
                )}
            </EpisodeListNav>
        </Layout>
    );
};

export default PodcastIndex;

export const pageQuery = graphql`
    query episodeListQuery {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        number
                        title
                        description
                        fileLink
                    }
                }
            }
        }
    }
`;
