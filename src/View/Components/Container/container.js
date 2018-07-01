import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/home';
import Project from '../Project/project';
import './container.css'

export default class Container extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <main role="main" className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/project" component={Project} />
                </Switch>
            </main>
        )
    }
}