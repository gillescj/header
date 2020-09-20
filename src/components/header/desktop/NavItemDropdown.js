import React from 'react';
import { COLOURS } from 'styling';
import styled from 'styled-components';

const HoverWrapper = styled.div`
    position: absolute;
    padding: 1rem;
    transform: translateX(-20px);
`;

const Container = styled.ul`
    display: grid;
    grid-gap: 3px;
    padding: 1rem;
    color: black;
    background: ${COLOURS.bgHeaderStandard};
    border-radius: 5px;
    box-shadow: 0 0px 2.2px rgba(0, 0, 0, 0.02), 0 0px 5.3px rgba(0, 0, 0, 0.028),
        0 0px 10px rgba(0, 0, 0, 0.035), 0 0px 17.9px rgba(0, 0, 0, 0.042),
        0 0px 33.4px rgba(0, 0, 0, 0.05), 0 0px 80px rgba(0, 0, 0, 0.07);
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
