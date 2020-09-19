import React from 'react';
import { COLOURS } from 'styling';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    line-height: 1.5rem;
    font-size: 1rem;
    border: black solid 2px;
    border-radius: 10px;
    transition: background 700ms;
    padding: 2rem 1rem;

    &:hover {
        background: ${COLOURS.darkGrey};
    }
`;

const DropdownItem = ({ children }) => {
    return <Container>{children}</Container>;
};

export default DropdownItem;
