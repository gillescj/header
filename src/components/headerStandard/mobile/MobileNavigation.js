import React, { useState } from 'react';
import { COLOURS, QUERIES } from 'styling';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuSVG } from 'assets/svgs/menu.svg';
import MobileNavItem from './MobileNavItem';
import MobileNavItemDropdown from './MobileNavItemDropdown';

const Container = styled.div`
    display: none;
    max-width: ${QUERIES.maxWidth};
    @media (${QUERIES.medium}) {
        display: grid;
    }
`;

const Navbar = styled.nav`
    display: grid;
`;

const Topbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    border-bottom: white 1px solid;
`;

const StoreHeading = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
`;

const HamburgerButton = styled.button`
    background: inherit;
    border: none;
    cursor: pointer;
    svg {
        display: block;
        margin: auto;
        stroke: black;

        #top {
            transition: all 150ms;
            transform: ${({ open }) => (open ? 'translateY(6px)' : 'translateY(0)')};
            opacity: ${({ open }) => (open ? '0' : '1')};
        }
        #middle {
            transition: all 100ms 150ms;
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
            transform-origin: center;
        }
        #middle-reverse {
            transition: all 100ms 150ms;
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
            transform-origin: center;
        }
        #bottom {
            transition: all 150ms;
            transform: ${({ open }) => (open ? 'translateY(-6px)' : 'translateY(0)')};
            opacity: ${({ open }) => (open ? '0' : '1')};
        }
    }
`;

const Dropdown = styled.ul`
    height: ${(props) => (props.open ? '100%' : '0')};
    visibility: ${(props) => (props.open ? 'visible' : 'collapse')};
    background: inherit;
    li {
        color: ${COLOURS.textBright};
        font-size: 1.6rem;
        background: inherit;

        margin-left: 1rem;
        line-height: 3rem;
        transition: filter 300ms;
        &:hover {
            filter: brightness(1.5);
        }
    }
    > li {
        margin-top: 1rem;
        &:last-child {
            margin-bottom: 1rem;
        }
    }
`;

const MobileNavigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Navbar>
                <Topbar>
                    <Link to="/">
                        <StoreHeading>Engaging Logo</StoreHeading>
                    </Link>
                    <HamburgerButton
                        open={open}
                        onClick={() => {
                            setOpen((previousOpen) => !previousOpen);
                        }}
                    >
                        <MenuSVG />
                    </HamburgerButton>
                </Topbar>
                <Dropdown open={open}>
                    <MobileNavItem to="/standard" name="Standard" />
                    <MobileNavItem to="/floating" name="Floating" />
                    <MobileNavItem to="/standard" name="Dropdown">
                        <MobileNavItemDropdown>
                            <MobileNavItem to="/standard" name="Option One" />

                            <MobileNavItem to="/standard" name="Option Two" />

                            <MobileNavItem to="/standard" name="Option Three" />
                        </MobileNavItemDropdown>
                    </MobileNavItem>
                </Dropdown>
            </Navbar>
        </Container>
    );
};

export default MobileNavigation;
