import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { fontDisplay } from '../styles/fonts';
import * as colors from '../styles/colors';

import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags';
import PodcastEpisodeSummary from '../components/PodcastEpisodeSummary';
import SubscribeLinks from '../components/SubscribeLinks';

const Title = styled.h1`
    ${fontDisplay}
    margin: 1rem 0;
`;


const Divider = styled.hr`
    border: 0;
    border-top: 1px solid ${colors.foregroundTertiary};
    margin: 2rem;
`;


const PodcastIndex = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
        <Layout location={location} title={siteTitle}>
            <MetaTags />

            <Title>
                Episodes
            </Title>

            {posts.map(({ node }) => {
                const slug = node.fields.slug;
                const title = node.frontmatter.title || node.fields.slug;
                const date = node.frontmatter.date;
                const number = node.frontmatter.number;
                const summary = node.frontmatter.description || node.excerpt;
                const fileLink = node.frontmatter.fileLink;

                return (
                    <PodcastEpisodeSummary
                        slug={slug}
                        title={title}
                        date={date}
                        number={number}
                        summary={summary}
                        fileLink={fileLink}
                    />
                );
            })}

            <Divider />

            <Title>
                Subscribe
            </Title>

            <SubscribeLinks />

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
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
