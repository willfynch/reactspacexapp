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
    <div>
        <header>
            <MDBNavbar color="white" light expand="md" scrolling fixed="top">
            <MDBNavbarBrand >
                <strong className="white-text">
                    <Link to="/launches"> 
                    <img style={{width:"50%"}}
                        src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg"
                        alt="SpaceX Logo"
                    />
                    </Link>
                    
                
                </strong>
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
        </header>
    </div>)}
}

export default NavBar;