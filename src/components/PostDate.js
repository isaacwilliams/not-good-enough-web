import styled from 'styled-components';
import { fontImport, fontBody, fontDisplay } from '../styles/fonts';
import * as colors from '../styles/colors';

const PostDate = styled.div`
    ${fontBody};
    font-size: 0.8rem;
    text-transform: uppercase;
    margin: 0.3rem 0;
    color: ${colors.foregroundSecondary};
`;

export default PostDate;
