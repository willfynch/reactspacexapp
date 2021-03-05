import React, {useState} from "react";
import {useEffect} from "react";
import Loading from "../components/Loading";
import APIFetcher from "../services/APIFetcher";
import LaunchCard from "../components/LaunchCard";
import { useLocation, useParams } from "react-router";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle,MDBCol } from 'mdbreact';





 function Launch(props) {

    const {id} = useParams();
    const [launch, setLaunch] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect (() => {
        let filters = [""];
            
    

        APIFetcher.get(`/launches/${id}`, filters).then(res => {
            console.log(res);
            setLaunch(res);
            setIsLoaded(true)
        }).catch(reason =>
            this.setState({isError: reason})
        );
    }
        , []
    )

    return(
            
        <MDBCol>
            <MDBCard>
            <h1>{launch.mission_name}</h1>
            <p>{launch.launch_year}</p>
            <MDBCardImage src={launch.links.mission_patch_small}></MDBCardImage>
            <p>{launch.details}</p>

            <MDBBtn >Wikipedia</MDBBtn>
            </MDBCard>
        </MDBCol>
    )
}

export default Launch;