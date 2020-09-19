import React from 'react';
import styled from 'styled-components';
import Layout from './Layout';

const Container = styled.div`
    padding: 0 2%;
`;

function App() {
    return (
        <Layout>
            <Container>Some Content</Container>
        </Layout>
    );
}

export default App;
