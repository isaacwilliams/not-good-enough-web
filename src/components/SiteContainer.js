import React, { Fragment } from "react";
import { Link } from "gatsby";
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import reset from '../styles/reset';
import { fontImport, fontBody, fontDisplay } from '../styles/fonts';
import * as colors from '../styles/colors';

const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontImport}

    body {
        ${fontBody}
        font-size: 1rem;
        line-height: 1.33;
        color: ${colors.foreground};
    }

    h1, h2, h3, h4 {
        ${fontDisplay}
    }

    h1 {
        font-size: 1.7rem;
    }

    h2 {
        font-size: 1.4rem;
    }

    h3 {
        font-size: 1.2rem;
    }

    h4 {
        font-size: 1rem;
    }

    ul {
        list-style: disc;
        line-height: 1.4;

        li {
            margin-left: 1rem;
        }
    }

    p {
        margin-bottom: 0.4em;
    }

    a {
        color: ${colors.accentSecondary};
    }
`;

const SiteContainer = ({ location, title, children }) => (
    <Fragment>
        <GlobalStyle />
        {children}
    </Fragment>
);

export default SiteContainer;
