import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

import media from '../styles/media';
import * as colors from '../styles/colors';
import { fontDisplay } from '../styles/fonts';

import SiteContainer from './SiteContainer';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const Footer = styled.footer`
    display: grid;

    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;

    grid-template-areas:
        'subscribe contact'
        'solidarity solidarity';


    width: 60vw;
    max-width: 30rem;

    margin-top: 3rem;
    margin-bottom: 3rem;
    padding-top: 3rem;
    
    margin-left: auto;
    margin-right: auto;

    border-top: 1px solid lightgrey;

    ${media.phone`
        width: auto;
        margin: 1rem 2rem;
    `}
`;

const FooterSubscribe = styled.section`
    grid-area: subscribe;
    margin: 1rem 0;
`;

const FooterContact = styled.section`
    grid-area: contact;
    margin: 1rem 0;
`;

const FooterSolidarity = styled.section`
    grid-area: solidarity;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    text-align: center;
`;

const AkOfCountry = styled.p`
    margin-top: 1rem;
    font-size: 0.9rem;
    max-width: 24rem;
`;

const Title = styled.h1`
    ${fontDisplay}
    margin: 1rem 0;
`;

const Divider = styled.hr`
    border: 0;
    border-top: 1px solid ${colors.foregroundTertiary};
    margin: 2rem;
`;

const MainContainer = styled.div`
    width: 60vw;
    max-width: 40rem;
    margin: 1rem auto;

    ${media.phone`
        width: auto;
        margin: 1rem 2rem;
    `}
`;

const LargeHeader = () => (
    <Header>
        <Link to={`/`}>
            <img src={require('./nge-logo.svg')}
                    alt="Not Good Enough — Inadequate responses to Inadequate responses"
                    width={260}
                    height={260} />
        </Link>
    </Header>
);

const RegularHeader = () => (
    <Header style={{ padding: '2rem' }}>
        <Link to={`/`}>
            <img src={require('./nge-logotype.svg')}
                    alt="Not Good Enough — Inadequate responses to Inadequate responses"
                    width={200}
                    height={100} />
        </Link>
    </Header>
);

const Layout = ({ location, title, children, noFooter }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;

    return (
        <SiteContainer>
            <header>
                {isRootPath ? (
                    <LargeHeader />
                ) : (
                    <RegularHeader />
                )}
            </header>
            <MainContainer>
                {children}
            </MainContainer>
            <Footer>
                <FooterSolidarity>
                    <img src={require('./nge-banner.svg')} alt="Solidaritus et podcastus" width={234} height={84} />

                    <AkOfCountry>
                        Not Good Enough is made on the lands of the Kulin nation, which have never been ceded.
                    </AkOfCountry>
                </FooterSolidarity>
            </Footer>
        </SiteContainer>
    );
}

export default Layout;
