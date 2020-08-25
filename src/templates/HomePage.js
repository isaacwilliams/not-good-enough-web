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
    margin: 1rem 0;
`;

const PreviousTitle = styled.h1`
    ${fontDisplay}
    margin-top: 5rem;
    padding: 3rem;

    border-top: 1px solid lightgrey;
    text-align: center;
`;

const EpisodeListNav = styled.nav`
    padding: 3rem 0 3rem 0;
    font-size: 1.1rem;
    text-align: center;
`;

const PodcastIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;
    const mainArticle = posts[0]?.node;
    const archiveList = posts.slice(1);

    return (
        <Layout location={location} title={siteTitle} largeHeader>
            <MetaTags title={siteTitle} />

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

            <PreviousTitle>
                Previous episodes
            </PreviousTitle>

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
                <Link to="/episodes">
                    View older episodes
                </Link>
            </EpisodeListNav>
        </Layout>
    );
};

export default PodcastIndex;

export const pageQuery = graphql`
    query homePageQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: $limit
            skip: $skip
        ) {
            edges {
                node {
                    excerpt
                    html
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
