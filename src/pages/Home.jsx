import React, { useState, useRef } from 'react';
import './home.scss';

const Home = () => {
	const guidValue = useRef('');
	const lookupValue = useRef('');
	const [ data, setData ] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitting...');
		const name = lookupValue.current.value;
		const guid = guidValue.current.value;

		const url = `https://abr.business.gov.au/json/MatchingNames.aspx?callback=nameCallback&name=${name}&guid=${guid}`;

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'text/plain; charset=ISO-8859-1');

		fetch(url)
			.then((response) => {
				return response.text();
			})
			.then((result) => {
				let hash = result.replace('nameCallback(', '');
				hash = hash.slice(0, -1);
				setData(JSON.parse(hash));
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className="homepage-container">
			<h1>Company Finder</h1>

			<form onSubmit={(e) => handleSubmit(e)}>
				<input type="text" placeholder="Enter GUID here" ref={guidValue} />
				<input type="text" placeholder="Company Lookup" ref={lookupValue} />
				<button type="submit">Submit</button>
			</form>

			{data ? (
				<div className="results-container">
					<ul>
						{data.Names.map((company) => {
							const { Name, Abn, Score } = company;
							return (
								<li key={`${Abn} ${Name}`}>
									{Abn} {Name} {Score}
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
		</div>
	);
};

export default Home;
