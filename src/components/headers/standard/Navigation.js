import React from 'react';
import { COLOURS, QUERIES } from 'styling';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SVGLogo } from 'assets/svgs/logo.svg';
import NavItem from '../NavItem';
import NavItemDropdown from '../NavItemDropdown';
import DropdownItem from '../DropdownItem';

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
                <Link to="/">
                    <SVGContainer>{<SVGLogo />}</SVGContainer>
                </Link>
            </LogoContainer>
            <RightNav>
                <NavItem to="/standard" name="Standard" headerType="standard">
                    <NavItemDropdown>
                        <DropdownItem>
                            <NavItem
                                to="/standard/logoLeft"
                                name="Logo Left"
                                headerType="standard"
                            />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem
                                to="/standard/logoMiddle"
                                name="Logo Middle"
                                headerType="standard"
                            />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem
                                to="/standard/logoRight"
                                name="Logo Right"
                                headerType="standard"
                            />
                        </DropdownItem>
                    </NavItemDropdown>
                </NavItem>
                <NavItem to="/floating" name="Floating" headerType="standard">
                    <NavItemDropdown>
                        <DropdownItem>
                            <NavItem
                                to="/floating/logoLeft"
                                name="Logo Left"
                                headerType="standard"
                            />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem
                                to="/floating/logoMiddle"
                                name="Logo Middle"
                                headerType="standard"
                            />
                        </DropdownItem>
                        <DropdownItem>
                            <NavItem
                                to="/floating/logoRight"
                                name="Logo Right"
                                headerType="standard"
                            />
                        </DropdownItem>
                    </NavItemDropdown>
                </NavItem>
                <NavItem to="/community" name="Community" headerType="standard" />
                <NavItem to="/contact" name="Contact" headerType="standard" />
            </RightNav>
        </Container>
    );
};

export default Navigation;
