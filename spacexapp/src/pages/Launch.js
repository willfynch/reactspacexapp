import React from "react";
import Loading from "../components/Loading";
import APIFetcher from "../services/APIFetcher";
import { MDBBtn, MDBCol, MDBRow } from 'mdbreact';
import "./Launch.css"
import YouTube from "react-youtube";



 class Launch extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            id : this.props.location.pathname.slice(10),
            isLoaded : false,
            launches : [],
            isError: "",
        }
    }


    componentDidMount() {
        const filters = [""] // ["flight_number", "mission_name", "details", "links/mission_patch"]
        APIFetcher.get(`/launches/${this.state.id}`, filters).then(res => {
            console.log(res);
            this.setState({launches: res, isLoaded: true})
        }).catch(reason =>
            this.setState({isError: reason})
        );
    }
    
    
    render(){

        if (this.state.isError.length !== 0) return console.log(this.state.isError);
        if (!this.state.isLoaded) return <Loading/>
        const launch = this.state.launches;
        const opts = {
            height: '243.75',
            width: '400',
            paddingTop: '56.25%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
              autoplay: 0,
            },
          };
  
    
    return(
            
        <MDBCol className="d-flex flex-column cardContainer">
            <MDBRow className="rowImage blue-gradient justify-content-center">
                <img 
                    className="cardImage" 
                    src={launch.links.mission_patch_small}
                    alt = "Mission Patch"
                    />
            </MDBRow>

            <MDBRow className=" rowTitle justify-content-center">
                <h1>{launch.mission_name}</h1>
            </MDBRow>

            <MDBRow className="blue-gradient rowYearandSite justify-content-center">
                <MDBCol>
                    <span className="launchedAtIn ">Launched at</span>
                    <h4 className="h4Launched">{launch.launch_site.site_name}</h4>
                </MDBCol>
                <MDBCol>
                    <span className="launchedAtIn">Launched in</span>
                    <h4 className="h4Launched">{launch.launch_year}</h4>
                </MDBCol>
                
            </MDBRow>

            <MDBRow className="rowSuccess justify-content-center">
            {
                
                launch.launch_success 
                ? (<><span className="aqua-gradient successIcon"><div>L</div></span><p className="successText">The mission is a success !</p></>)
                : (<><span className="ripe-malinka-gradient noSuccessIcon"><div>:(</div></span><p  className="failureDetails">Mission has failed ! Reason : {launch.launch_failure_details.reason}</p></>)
                
            }
            </MDBRow>

            <MDBRow className="rowDetails justify-content-center">
                <span className="spanDetails blue-gradient">Details</span>
            {
                launch.details
                ? (<p>{launch.details}</p>)
                : (<p>No details to display here.</p>)
                
            }
            <span className="spanDetailsLine blue-gradient"></span>
            </MDBRow>

            <MDBRow className=" rowVideo d-flex flex-column justify-content-center align-items-center"> 
                <span className="spanVideo">Video</span>
                <span className="spanVideoLine blue-gradient"></span>
                <div className="videoBox blue-gradient d-flex justify-content-center align-items-center">
                    <YouTube opts={opts} className="youtubeVideo" videoId={launch.links.youtube_id} />
                </div>
            
            </MDBRow>
                
            <MDBRow className=" rowLinks d-flex justify-content-center align-items-center">
                <span className="spanSeeMore blue-gradient">See more</span>
                <MDBBtn target="_blank" href={launch.links.wikipedia}>Wikipedia</MDBBtn>
                <MDBBtn target="_blank" href={launch.links.article_link}>Article</MDBBtn>
            </MDBRow>
            <MDBRow><span className="spanFinalLine blue-gradient"></span></MDBRow>
                
           
                
            
            
            
            
            
            
            

           

           

           

            

            
            
        </MDBCol>
    )
}
}

export default Launch;