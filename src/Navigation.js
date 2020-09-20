import React from 'react';
import { COLOURS, QUERIES } from 'styling';
import styled from 'styled-components';
import NavItem from './NavItem';
import { ReactComponent as SVGLogo } from 'assets/svgs/logo.svg';
import NavItemDropdown from 'NavItemDropdown';
import DropdownItem from './DropdownItem';

export const Container = styled.nav`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 1rem;

    @media (${QUERIES.medium}) {
        display: none;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        transition: filter 300ms;
    }
`;

const NavUl = styled.ul`
    display: flex;
    list-style-type: none;
    justify-self: center;
    z-index: 2;
    li {
        padding-right: 1rem;
    }
    li > a {
    }
    li:first-child {
        padding-left: 1rem;
    }
`;

const RightNav = styled(NavUl)`
    justify-self: end;
`;

const LeftNav = styled(NavUl)`
    justify-self: start;
`;

const SVGContainer = styled.div`
    padding: 0 1rem;
    svg {
        width: 50px;
        height: 50px;
    }
    @media (${QUERIES.large}) {
        padding: 0 0.3rem;
        svg {
            transform: scale(0.8);
        }
    }
`;

const Navigation = () => {
    return (
        <Container>
            <LogoContainer>
                <a href="/">
                    <SVGContainer>{<SVGLogo />}</SVGContainer>
                </a>
            </LogoContainer>
            <RightNav>
                <NavItem to="/standard" name="Standard">
                    <NavItemDropdown>
                        <DropdownItem>
                            <NavItem to="/logoLeft" name="Logo Left" />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem to="/logoMiddle" name="Logo Middle" />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem to="/logoRight" name="Logo Right" />
                        </DropdownItem>
                    </NavItemDropdown>
                </NavItem>
                <NavItem to="/floating" name="Floating">
                    <NavItemDropdown>
                        <DropdownItem>
                            <NavItem to="/logoLeft" name="Logo Left" />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem to="/logoMiddle" name="Logo Middle" />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem to="/logoRight" name="Logo Right" />
                        </DropdownItem>
                    </NavItemDropdown>
                </NavItem>
                <NavItem to="/community" name="Community" />
                <NavItem to="/contact" name="Contact" />
            </RightNav>
        </Container>
    );
};

export default Navigation;
