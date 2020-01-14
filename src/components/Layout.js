import React from "react";
import { Link } from "gatsby";
import styled from 'styled-components';

import media from '../styles/media';
import SiteContainer from './SiteContainer';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
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

const Layout = ({ location, title, children }) => {
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
                <img src={require('./nge-banner.svg')} width={234} height={84} />
            </Footer>
        </SiteContainer>
    );
}

export default Layout;
