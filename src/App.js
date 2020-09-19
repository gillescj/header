import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';
import { ReactComponent as SVGContent } from 'assets/svgs/placeholder-content.svg';

const Container = styled.div`
    padding: 0 2%;
`;

function App() {
    return (
        <Layout>
            <Container>
                <SVGContent />
            </Container>
        </Layout>
    );
}

export default App;
