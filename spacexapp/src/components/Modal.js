import React, { Fragment } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol } from 'mdbreact';

const Modal = (props) => {
    const { capsule, show } = props;
    const onClose = e => {
        props.onClose && props.onClose(e);
    };
    if (!show) return null;

    return (
        <MDBContainer>
            <MDBModal isOpen={e => onClose(e)} size="lg">
                <MDBModalHeader style={{ textAlign: "center" }}>{capsule.capsule_serial}</MDBModalHeader>
                <MDBModalBody className="text-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <div ><strong>Capsule Id : </strong>{capsule.capsule_id}</div>
                        </MDBCol>
                        <MDBCol md="6">
                            <div><strong>Status : </strong>{capsule.status}</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        {
                            (capsule.original_launch && capsule.original_launch_unix) ? (
                            <Fragment>
                                <MDBCol md="6">
                                    <div><strong>Original Launch : </strong>{capsule.original_launch ? capsule.original_launch : 'No information'}</div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <div><strong>Original Launch Unix : </strong>{capsule.original_launch_unix ? capsule.original_launch_unix : 'No information'}</div>
                                </MDBCol>
                            </Fragment>) : null
                        }

                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <div><strong>Landings :  </strong>{capsule.landings}</div>
                        </MDBCol>
                        <MDBCol md="6">
                            <div><strong>Type : </strong>{capsule.type}</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <div><strong>Details : </strong>{capsule.details ? capsule.details : "No details about this capsule"}</div>
                        </MDBCol>
                        <MDBCol md="6">
                            <div> <strong>Reuse Count : </strong>{capsule.reuse_count}</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        {
                            capsule.missions.length ? (<MDBCol>
                                <div><strong>Missions :</strong></div>
                                {
                                    capsule.missions.map(mission => (
                                        <div style={{ marginLeft: "10px" }}>
                                            <strong>Name : </strong>{mission.name},    <strong>Flight :</strong> {mission.flight}
                                        </div>
                                    ))
                                }
                            </MDBCol>) : null
                        }

                    </MDBRow>
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={e => { onClose(e) }}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    )
}


export default Modal;
