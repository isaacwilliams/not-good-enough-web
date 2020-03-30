import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/LayoutMinimal';
import MetaTags from '../../components/MetaTags';

const Title = styled.h1`
    margin: 1rem 0;
`;

const EmailTitle = styled.h3`
    margin: 1rem 0;
`;

const RentStrikePage = ({ location }) => (
    <Layout location={location}>
        <MetaTags
            title={`Not Good Enough - Demand rent action`}
            description="Call for relief for renters and mortgage holders"
        />

        <Title>
            Demand rent action
        </Title>

        <p>
             We need dramatic action to avoid the crisis of mass debt and homelessness for millions of Australians. Join us in calling for action from your local MPs, sentators and council representatives. Use the basic email template below, but don't forget to add your personal touch to it.
        </p>

        <EmailTitle>
            Finding your representatives
        </EmailTitle>

        <ul>
            <li><a href="https://www.aph.gov.au/senators_and_members/guidelines_for_contacting_senators_and_members">Federal representatives</a>. Just look for the search form at the bottom.</li>
            <li><a href="https://www.ourcommunity.com.au/advocacy/advocacy_article.jsp?articleId=2386">State representatives</a></li>
        </ul>

        <EmailTitle>
            Subject: Avoiding mass homelessness and debt during this crisis
        </EmailTitle>

        <p>Hi, [NAME OF MP]</p>

        <p>I hope that you and your family are safe and that you're keeping sane in this terrifying period.</p>

        <p>I'm writing to you as a [RENTER/HOMEOWNER] in [SUBURB].</p>

        <p>For homeowners and renters alike, income sources are drying up and the threat of foreclosure and eviction is becoming more and more real. There are millions of Australians who won't have enough in savings to continue paying their rent or mortgage in the coming weeks, let alone months, if their regular source of income stops. The government needs to step in.</p>

        <p>I'm writing to urge you to push for a suspension on residential rents and mortgage repayments, as soon as possible. Not to be paid back later - just halted, completely, until the pandemic has passed and regular work can resume. This situation is too desperate to stick to business as usual, and throwing people into tens of thousands of dollars of debt as soon as regular work can resume will only entrench the economic crisis. As you can imagine, homelessness would be even worse.</p>

        <p>Australians need a guarantee that they will not lose their homes or be saddled with unnecessary debt, and I need you to fight for it.</p>

        <p>Thanks,</p>
        <p>[FULL NAME]</p>
    </Layout>
);

export default RentStrikePage;
