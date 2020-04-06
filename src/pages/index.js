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


const PodcastIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    const mainPost = posts[0].node;
    const otherPosts = posts.slice(1);

    return (
        <Layout location={location} title={siteTitle}>
            <MetaTags title="Not Good Enough" />

            <article>

            </article>

            <article>
                <PodcastEpisodeSummary
                    isMainListing
                    slug={mainPost.fields.slug}
                    title={mainPost.frontmatter.title}
                    date={mainPost.frontmatter.date}
                    number={mainPost.frontmatter.number}
                    summary={mainPost.frontmatter.description}
                    fileLink={mainPost.frontmatter.fileLink}
                />

                <BodyText dangerouslySetInnerHTML={{ __html: mainPost.html }} />
            </article>

            <Title>
                Previous episodes
            </Title>

            {otherPosts.map(({ node }) => {
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

            <Link to="/archive">
                Full episode archives
            </Link>
        </Layout>
    );
};

export default PodcastIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
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
