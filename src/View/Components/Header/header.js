import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../../assets/image/banner.png';
import './header.css';
import Dropdown from './dropdown/dropdown';
import {Link} from 'react-router-dom';

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            MenuList: ["Home", "Category", "Project"],
            Active: "Home",
            Category: ["Computer Science", "IT", "Game", "Others"],
        }
    }

    render(){
        return(
            <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top header">
                <a className="navbar-brand">
                    <img className="logo" src={logo}/>
                </a>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        {this.state.MenuList.map(menu => {
                            let active = this.state.Active === menu ? "active" : "";
                            let _class = "nav-item menu-item " + active;
                            let pathName = menu === "Home" ? "" : menu;
                            let uriPath = "/"+pathName;
                            if(menu !== "Category"){
                                return (
                                    <li className={_class} key={menu}>
                                        <Link className="nav-link menu-text" to={uriPath}>{menu}</Link>
                                    </li>
                                )
                            }
                            else{
                                _class = _class + " dropdown";
                                return(
                                    <Dropdown key={menu} _className={_class} menu={menu} submenuName={this.state.Category} uriPath={uriPath}/>
                                )
                            }
                            
                            }
                        )}
                    </ul>
                    <form className="form-inline mt-2 mt-md-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            </header>
        )
    }
}