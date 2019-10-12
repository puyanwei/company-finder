import React, { useRef } from 'react';
import './home.scss';

const Home = () => {
	const inputValue = useRef('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitting...');
		const name = 'Apple';

		const guid = inputValue.current.value;

		const url = `https://abr.business.gov.au/json/MatchingNames.aspx?callback=nameCallback&name=${name}&guid=${guid}`;

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'application/json; charset=ISO-8859-1');

		fetch(url)
			.then((res) => {
				return res.text();
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.log(err));
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
