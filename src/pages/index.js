import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { fontDisplay } from '../styles/fonts';
import * as colors from '../styles/colors';

import Layout from '../components/Layout';
import MetaTags from '../components/MetaTags';
import PostDate from '../components/PostDate';

const Title = styled.h1`
    ${fontDisplay}
    margin: 1rem 0;
`;

const ListingTitle = styled.h3`
    ${fontDisplay}
    font-size: 1.2rem;
`;

const ListingItem = styled.article`
    margin-bottom: 1rem;
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
                const title = node.frontmatter.title || node.fields.slug;
                const number = node.frontmatter.number;

                return (
                    <ListingItem key={node.fields.slug}>
                        <header>
                            <ListingTitle>
                                <Link to={node.fields.slug}>{title}</Link>
                            </ListingTitle>
                            <PostDate>{node.frontmatter.date} • Episode {number}</PostDate>
                        </header>

                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html:
                                        node.frontmatter.description ||
                                        node.excerpt,
                                }}
                            />
                        </section>
                    </ListingItem>
                );
            })}

            <Divider />

            <Title>
                Subscribe
            </Title>

            <ul>
                <li><a href="https://feed.podbean.com/notgoodenough/feed.xml">RSS Feed</a></li>
                <li>Follow <a href="https://twitter.com/notgoodpod">@notgoodpod</a></li>
            </ul>

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
                    }
                }
            }
        }
    }
`;
