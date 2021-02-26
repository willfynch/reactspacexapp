import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export default function App() {
    return (
        <Switch>
            <Route exact path={['/', '/home']}  component={Home} />
            <Route path='/users' component={Users} />
            <Route component={NotFoundPage} />
        </Switch>
    );
}

function Home() {
    return <h2>Home</h2>;
}
function Users() {
    return <h2>Users</h2>;
}