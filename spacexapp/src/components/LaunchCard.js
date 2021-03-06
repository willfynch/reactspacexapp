import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCol } from 'mdbreact';

const LaunchCard = (props) => {
    const launch = props.launch;
    return (
        <MDBCol>
            <MDBCard style={{ width: "15rem", height: "420px"}}>
                <MDBCardImage className="img-fluid" src={launch.links.mission_patch} waves />
                <MDBCardBody>
                    <MDBCardTitle>{launch.mission_name}</MDBCardTitle>
                    <MDBBtn href={`/launches/${launch.flight_number}`}>Consult</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default LaunchCard;