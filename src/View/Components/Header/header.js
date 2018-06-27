import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../../assets/image/banner.png';
import './header.css';

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="navbar navbar-dark header">
                <div className="container d-flex justify-content-between">
                    <a className="navbar-brand d-flex align-items-center">
                        <img className="logo" src={logo}/>
                    </a>
                </div>
            </div>
        )
    }
}