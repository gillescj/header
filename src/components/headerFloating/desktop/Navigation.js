import React from 'react';
import { QUERIES } from 'styling';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SVGLogo } from 'assets/svgs/logo.svg';
import NavItem from './NavItem';
import NavItemDropdown from './NavItemDropdown';
import DropdownItem from './DropdownItem';

const Container = styled.nav`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    padding: 0.5rem;
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

const SVGContainer = styled.div`
    padding: 0 1rem;
    svg {
        height: 35px;
        width: auto;
    }
`;

const Navigation = () => {
    return (
        <Container>
            <LogoContainer>
                <Link to="/">
                    <SVGContainer>{<SVGLogo />}</SVGContainer>
                </Link>
            </LogoContainer>
            <RightNav>
                <NavItem to="/floating" name="Dropdown">
                    <NavItemDropdown>
                        <DropdownItem>
                            <NavItem to="/floating" name="Option One" />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem to="/floating" name="Option Two" />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem to="/floating" name="Option Three" />
                        </DropdownItem>
                    </NavItemDropdown>
                </NavItem>
                <NavItem to="/standard" name="Standard" />
                <NavItem to="/floating" name="Floating" />
            </RightNav>
        </Container>
    );
};

export default Navigation;
