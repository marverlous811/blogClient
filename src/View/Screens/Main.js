import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Components/Header/header';
import Container from '../Components/Container/container';
import $ from 'jquery';
import Bootstrap  from 'bootstrap';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                
                <Container/>
                {/* <Footer/> */}
            </div>
        );
    }
}