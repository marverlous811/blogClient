import React from 'react';
import ReactDOM from 'react-dom';
import Main from './View/Screens/Main';
import { BrowserRouter } from 'react-router-dom';

class Index extends React.Component{
	render(){
		return(
			<BrowserRouter>
				<Main/>
			</BrowserRouter>
		)
	}
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);