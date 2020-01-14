import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { fontImport, fontBody, fontDisplay } from '../styles/fonts';
import * as colors from '../styles/colors';

const ListingTitle = styled.h3`
    ${fontDisplay}
    font-size: 1.2rem;
`;

const ListingTitleMain = styled.h1`
    ${fontDisplay}
    font-size: 1.8rem;
`;

const PostDate = styled.div`
    ${fontBody};
    font-size: 0.8rem;
    text-transform: uppercase;
    margin: 0.3rem 0;
    color: ${colors.foregroundSecondary};
`;

const ListingItem = styled.article`
    margin-bottom: 1rem;
`;

const ListingDescription = styled.div`
    font-style: italic;
`;

const PlayerContainer = styled.div`
    margin: 1rem 0;
`;

const PodcastEpisodeSummary = ({
    isMainListing = false,
    slug,
    title,
    summary,
    date,
    number,
    fileLink,
}) => {
    const Title = isMainListing ? ListingTitleMain : ListingTitle;

    return (
        <ListingItem>
            <header>
                <Title>
                    <Link to={slug}>{title}</Link>
                </Title>
                <PostDate>{date} • Episode {number}</PostDate>
            </header>

            <ListingDescription
                dangerouslySetInnerHTML={{
                    __html: summary,
                }}
            />

            {fileLink && (
                <PlayerContainer>
                    <audio controls src={fileLink} />
                </PlayerContainer>
            )}
        </ListingItem>
    );;
}

export default PodcastEpisodeSummary;
