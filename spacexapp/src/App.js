import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import NavBar from "./components/Navbar";
import {MDBContainer} from "mdbreact";
import Launches from "./pages/Launches";
import Capsules from "./pages/Capsules"
import Launch from "./pages/Launch";

export default function App() {
    return (
        <>
            <NavBar/>
            <MDBContainer style={{height: 1300}} className="text-center mt-5 pt-5">
                <Switch>
                    <Route exact path={['/', '/launches']} component={Launches}/>
                    <Route exact path={'/launches/:id'} component={Launch}/>
                    <Route exact path='/capsules' component={Capsules}/>
                    <Route exact path={'/launches/:id'} component={Launch}/>
                    <Route path='/capsules' component={Capsules}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </MDBContainer>
        </>
    );
}

function Capsule() {
    return <h2>Capsules</h2>;
}

