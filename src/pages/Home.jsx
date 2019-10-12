import React from 'react';
import './home.scss';

const Home = () => {
	return (
		<div className="homepage-container">
			<h1>Company Finder</h1>
			<form>
				<input type="text" />
				<button type="submit">Fetch Company Details!</button>
			</form>
		</div>
	);
};

export default Home;
