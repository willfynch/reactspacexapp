import React from "react";
import Loading from "../components/Loading";
import APIFetcher from "../services/APIFetcher";
import LaunchCard from "../components/LaunchCard";

class Launches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            launches: [],
            isLoaded: false,
            isError: ''
        }
    }

    componentDidMount() {
        const filters = ["flight_number", "mission_name", "details", "links/mission_patch"]
        APIFetcher.get('/launches', filters).then(res => {
            console.log(res);
            this.setState({launches: res, isLoaded: true})
        }).catch(reason =>
            this.setState({isError: reason})
        );
    }

    render() {
        if (this.state.isError.length !== 0) return console.log(this.state.isError);
        if (!this.state.isLoaded) return <Loading/>
        return (
            <div className="d-flex flex-wrap bd-highlight example-parent flex-center">
                {
                    this.state.launches.map(
                        item => (
                            <div className="p-2 bd-highlight col-example" key={item.mission_name}>
                                <LaunchCard launch={item} />
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default Launches;