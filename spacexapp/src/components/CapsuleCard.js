import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

class CapsuleCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            capsule: props.capsule,
            showModal: props.showModal,
        }
    }

    render() {
        const { capsule, showModal} = this.state;
        return (
            <MDBCol style={{ maxWidth: "22rem" }}>
                <MDBCard>
                    <MDBCardImage className="img-fluid" src="https://thumbor.sd-cdn.fr/5iPoN0YdqKcUElscki9rTwaW0tw=/940x550/cdn.sd-cdn.fr/wp-content/uploads/2019/03/Capsule-Dragon-vol-habitable-ISS.jpg" waves />
                    <MDBCardBody>
                        <MDBCardTitle>{capsule.capsule_serial}</MDBCardTitle>
                        <MDBCardText>
                            {
                                capsule.details ? capsule.details : 'No details about this capsule.'
                            }
                        </MDBCardText>
                        <MDBBtn color="light-green" onClick={e => {showModal(capsule)}} >Consulter</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
    
}

export default CapsuleCard;