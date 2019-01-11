import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
	return <div>
	Page One
	<a href='/pagetwo'>Navigate to page two</a> 
	</div>
};

const PageTwo = () => {
	return <div>
	Page Two 
	<button>click me</button>
	<a href='/'>Navigate to page one</a> 
	</div>
};

const App = () => {
	return (
		<div> 
			<BrowserRouter>
				<div>
				<Route path="/" exact component={PageOne} />
				<Route path="/pageTwo" component={PageTwo} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;