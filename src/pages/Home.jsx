import React, { useRef } from 'react';
import './home.scss';

const Home = () => {
	const inputValue = useRef('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submits');
	};

	return (
		<div className="homepage-container">
			<h1>Company Finder</h1>

			<form onSubmit={(e) => handleSubmit(e)}>
				<input type="text" placeholder="Enter GUID here" ref={inputValue} />
				<button type="submit">Fetch Company Details!</button>
			</form>
		</div>
	);
};

export default Home;
