import React, { useState } from 'react';
import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';
import Navigation from '../Navigation';
import MobileNavigation from '../MobileNavigation';

const WidthWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${({ maxHeaderWidth }) => maxHeaderWidth});
    justify-content: center;
    padding: 1rem 1.5rem 0rem 1.5rem;
`;

const Container = styled.header`
    color: ${COLOURS.textHeader};
    background: ${COLOURS.bgHeaderFloating};
    border-radius: 8px;
`;

const Header = () => {
    return (
        <WidthWrapper maxHeaderWidth={QUERIES.maxHeaderWidth}>
            <Container>
                <MobileNavigation headerType="floating" />
                <Navigation headerType="floating" />
            </Container>
        </WidthWrapper>
    );
};

export default Header;
