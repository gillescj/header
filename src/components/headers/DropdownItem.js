import React from 'react';
import { COLOURS } from 'styling';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    line-height: 1.5rem;
    font-size: 1rem;
    border-radius: 10px;
    padding: 0.8rem;
`;

const DropdownItem = ({ children }) => {
    return <Container>{children}</Container>;
};

export default DropdownItem;
