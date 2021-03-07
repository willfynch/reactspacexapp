import { MDBCol, MDBRow, MDBBtn } from "mdbreact";
import React, { useState } from "react";
import "./Home.css";

class Home extends React.Component {

    render() {
        return (

            <MDBCol className="colHome d-flex flex-column justify-content-between align-items-center">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg" 
                    className="img-fluid" 

                    width="700" 
                    height="700" 
                />

                <h1 id="text">
                    Welcome on SpaceX Data Visualizer. Let's get started, make a choice ! 
                </h1>
                

                <MDBRow className="rowBtn d-flex flex-column m-5">
                    <MDBBtn href={`/launches/`}>See launches</MDBBtn>
                    <MDBBtn href={`/capsules/`}>See capsules</MDBBtn>
                </MDBRow>
            
            </MDBCol>

            
                
            
        )
    }
}

export default Home;
