import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';
import { ReactComponent as SVGContent } from 'assets/svgs/placeholder-content.svg';

const Container = styled.div`
    padding: 0 2%;
`;

function App() {
    return (
        <Router>
            <Layout>
                <Container>
                    <SVGContent />
                </Container>
            </Layout>
        </Router>
    );
}

export default App;
