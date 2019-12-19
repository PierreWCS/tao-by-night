import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Pierre from "./components/Pierre";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/validate" component={Pierre}/>
            </Switch>
        </div>
    );
}

export default App;