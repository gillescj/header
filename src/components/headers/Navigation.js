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

const LeftNav = styled(NavUl)`
    justify-self: start;
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
                    <NavItem to="/standard" name="Standard" headerType={headerType}>
                        <NavItemDropdown>
                            <DropdownItem>
                                <NavItem
                                    to="/standard/logoLeft"
                                    name="Logo Left"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to="/standard/logoMiddle"
                                    name="Logo Middle"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to="/standard/logoRight"
                                    name="Logo Right"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                        </NavItemDropdown>
                    </NavItem>
                    <NavItem to="/floating" name="Floating" headerType={headerType}>
                        <NavItemDropdown>
                            <DropdownItem>
                                <NavItem
                                    to="/floating/logoLeft"
                                    name="Logo Left"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to="/floating/logoMiddle"
                                    name="Logo Middle"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to="/floating/logoRight"
                                    name="Logo Right"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                        </NavItemDropdown>
                    </NavItem>
                    <NavItem to="/community" name="Community" headerType={headerType} />
                    <NavItem to="/contact" name="Contact" headerType={headerType} />
                </RightNav>
            </ContainerStandard>
        );
    } else {
        return (
            <ContainerFloating>
                <LogoContainer>
                    <Link to="/">
                        <SVGContainerFloating>{<SVGLogo />}</SVGContainerFloating>
                    </Link>
                </LogoContainer>
                <RightNav>
                    <NavItem to="/standard" name="Standard" headerType={headerType}>
                        <NavItemDropdown>
                            <DropdownItem>
                                <NavItem
                                    to="/standard/logoLeft"
                                    name="Logo Left"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to="/standard/logoMiddle"
                                    name="Logo Middle"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to="/standard/logoRight"
                                    name="Logo Right"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                        </NavItemDropdown>
                    </NavItem>
                    <NavItem to="/floating" name="Floating" headerType={headerType}>
                        <NavItemDropdown>
                            <DropdownItem>
                                <NavItem
                                    to="/floating/logoLeft"
                                    name="Logo Left"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to="/floating/logoMiddle"
                                    name="Logo Middle"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                            <DropdownItem>
                                <NavItem
                                    to="/floating/logoRight"
                                    name="Logo Right"
                                    headerType={headerType}
                                />
                            </DropdownItem>
                        </NavItemDropdown>
                    </NavItem>
                    <NavItem to="/community" name="Community" headerType={headerType} />
                    <NavItem to="/contact" name="Contact" headerType={headerType} />
                </RightNav>
            </ContainerFloating>
        );
    }
};

export default Navigation;
