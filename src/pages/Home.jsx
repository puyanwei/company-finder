import React, { useRef } from 'react';
import './home.scss';

const Home = () => {
	const inputValue = useRef('');

	const logInput = () => {
		console.log(inputValue.current.value);
	};

	return (
		<div className="homepage-container">
			<h1>Company Finder</h1>

			<form>
				<input type="text" placeholder="Enter GUID here" ref={inputValue} onChange={logInput} />
				<button type="submit">Fetch Company Details!</button>
			</form>
		</div>
	);
};

export default Home;
