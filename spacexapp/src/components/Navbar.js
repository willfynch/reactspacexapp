import React from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBIcon
} from 'mdbreact';

const NavBar = () => (
    <div>
        <header>
            <MDBNavbar style={{backgroundColor: 'black'}} dark expand="md" scrolling fixed="top">
                <MDBCollapse navbar>
                    <MDBNavbarNav>
                        <MDBNavItem active>
                            <MDBNavLink to="/launches">Launches</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/capsules">Capsules</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </header>
    </div>
)

export default NavBar;