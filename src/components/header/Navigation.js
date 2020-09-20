import React from 'react';
import { COLOURS, QUERIES } from 'styling';
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

    @media (${QUERIES.medium}) {
        display: none;
    }
`;

const ContainerStandard = styled(Container)`
    padding: 1rem;
`;
const ContainerFloating = styled(Container)`
    padding: 0.5rem;
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
        height: 45px;
        width: auto;
    }
`;

const SVGContainerStandard = styled(SVGContainer)`
    @media (${QUERIES.large}) {
        padding: 0 0.3rem;
        svg {
            transform: scale(0.8);
        }
    }
`;
const SVGContainerFloating = styled(SVGContainer)`
    svg {
        height: 35px;
        width: auto;
    }
`;

const Navigation = ({ headerType }) => {
    if (headerType === 'standard') {
        return (
            <ContainerStandard>
                <LogoContainer>
                    <Link to="/">
                        <SVGContainerStandard>{<SVGLogo />}</SVGContainerStandard>
                    </Link>
                </LogoContainer>
                <RightNav>
                    <NavItem
                        to={`/${headerType}`}
                        name="Dropdown"
                        headerType={headerType}
                    >
                        <NavItemDropdown>
                            <DropdownItem>
                                <NavItem
                                    to={`/${headerType}`}
                                    name="Option One"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to={`/${headerType}`}
                                    name="Option Two"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to={`/${headerType}`}
                                    name="Option Three"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                        </NavItemDropdown>
                    </NavItem>
                    <NavItem to="/standard" name="Standard" headerType={headerType} />
                    <NavItem to="/floating" name="Floating" headerType={headerType} />
                </RightNav>
            </ContainerStandard>
        );
    } else if (headerType === 'floating') {
        return (
            <ContainerFloating>
                <LogoContainer>
                    <Link to="/">
                        <SVGContainerFloating>{<SVGLogo />}</SVGContainerFloating>
                    </Link>
                </LogoContainer>
                <RightNav>
                    <NavItem
                        to={`/${headerType}`}
                        name="Dropdown"
                        headerType={headerType}
                    >
                        <NavItemDropdown>
                            <DropdownItem>
                                <NavItem
                                    to={`/${headerType}`}
                                    name="Option One"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to={`/${headerType}`}
                                    name="Option Two"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to={`/${headerType}`}
                                    name="Option Three"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                        </NavItemDropdown>
                    </NavItem>
                    <NavItem to="/standard" name="Standard" headerType={headerType} />
                    <NavItem to="/floating" name="Floating" headerType={headerType} />
                </RightNav>
            </ContainerFloating>
        );
    }
};

export default Navigation;
