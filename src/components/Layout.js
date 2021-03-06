import React from 'react';
import styled from 'styled-components';
import { QUERIES } from 'styling';
import { Route, Switch } from 'react-router-dom';
import HeaderStandard from './headerStandard';
import HeaderFloating from './headerFloating';

const Container = styled.div`
    display: grid;
    align-items: start;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
`;

const MainWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(1rem, ${({ maxWidth }) => maxWidth});
    justify-content: center;
    main {
        padding: ${({ padding }) => padding};
        margin-bottom: 5rem;
    }
`;

const Footer = styled.footer`
    padding: 2rem;
    background: #222222;
    color: white;
`;

const Layout = ({ children, maxWidth = QUERIES.maxWidth, padding = '2rem 1rem' }) => {
    return (
        <Container>
            <Switch>
                <Route path="/" exact component={HeaderStandard} />
                <Route path="/standard" component={HeaderStandard} />
                <Route path="/floating" component={HeaderFloating} />
            </Switch>
            <MainWrapper maxWidth={QUERIES.maxWidth} padding={padding}>
                <main>{children}</main>
            </MainWrapper>
            <Footer>Footer Content</Footer>
        </Container>
    );
};

export default Layout;
