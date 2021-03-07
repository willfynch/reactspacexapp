import React from 'react';
import {Link} from "react-router-dom";
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
  
} from 'mdbreact';

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isOpen: false
          };
    }
      
      toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
      }

    render(){
    return(
    
        
            <MDBNavbar color="white" light expand="md" scrolling fixed="top" className="d-flex flex-row justify-content-space">

                <MDBNavbarBrand >
                        <Link to="/"> 
                        <img style={{width:"125px"}}
                            src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg"
                            alt="SpaceX Logo"
                        />
                        </Link>               
                </MDBNavbarBrand>


                <MDBNavbarToggler onClick={this.toggleCollapse} />


                <MDBCollapse  isOpen={this.state.isOpen} navbar>

                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink to="/launches">Launches</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/capsules">Capsules</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>

                </MDBCollapse>


            </MDBNavbar>
        
    )}
}

export default NavBar;