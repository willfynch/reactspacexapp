import React from "react";
import {MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="darken-1" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/willfynch/reactspacexapp">Groupe 1 </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;