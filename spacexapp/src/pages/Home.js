import React, { useState } from "react";
import "./Home.css";

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1 id="text">
                    Welcome on SpaceX App
                </h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg" class="img-fluid" width="1000" height="1000" align ="center" />
            </div>
        )
    }
}

export default Home;
