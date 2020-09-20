import React from 'react';
import styled from 'styled-components';
import { QUERIES, COLOURS } from 'styling';
import Navigation from './Navigation';

const WidthWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${({ maxHeaderWidth }) => maxHeaderWidth});
    justify-content: center;
    padding-top: 1rem;
`;

const Container = styled.header`
    color: ${COLOURS.textHeader};
    background: ${COLOURS.bgHeaderFloating};
`;

const Header = () => {
    return (
        <WidthWrapper maxHeaderWidth={QUERIES.maxHeaderWidth}>
            <Container>
                {/* <MobileNavigation /> */}
                <Navigation />
            </Container>
        </WidthWrapper>
    );
};

export default Header;
