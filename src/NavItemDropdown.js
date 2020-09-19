import React from 'react';
import { COLOURS } from 'styling';
import styled from 'styled-components';

const HoverWrapper = styled.div`
    position: absolute;
    border: black dotted 2px;
    padding: 1rem;
    transform: translateX(-20px);
`;

const Container = styled.div`
    display: grid;
    grid-gap: 3px;
    padding: 1rem;
    color: black;
    background: ${COLOURS.veryDarkBlue};
    border: black solid 2px;
    border-radius: 10px;
    opacity: ${({ visible }) => (visible ? '1' : '0')};
    transition: opacity 2s ease-in-out;
`;

const NavItemDropdown = ({ children }) => {
    return (
        <HoverWrapper>
            <Container visible={typeof children !== 'undefined'}>{children}</Container>
        </HoverWrapper>
    );
};

export default NavItemDropdown;
