import React from 'react';
import './dropdown.css';
import {Link} from 'react-router-dom';

export default class Dropdown extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className={this.props._className}>
                <a className="nav-link dropdown-toggle menu-text" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.props.menu}
                </a>
                <div className="dropdown-menu dropdown-custom" aria-labelledby="navbarDropdownMenuLink">
                    {this.props.submenuName.map((name) => {
                        let _uriPath = this.props.uriPath+"/"+name;
                        return(
                            <Link key={name} to={_uriPath} className="dropdown-item menu-text">{name}</Link>
                        ) 
                    })}
                </div>
            </li>
        )
    }
}