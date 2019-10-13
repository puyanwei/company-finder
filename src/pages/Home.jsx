import React, { useState, useRef } from 'react';

import Company from '../components/Company';
import './home.scss';

const Home = () => {
	const guidValue = useRef('');
	const queryValue = useRef('');
	const [ data, setData ] = useState(null);
	const [ isError, setIsError ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submitting...');
		let query = queryValue.current.value;
		let guid = guidValue.current.value;
		setIsLoading(true);

		return nameOrABNQuery(query, guid);
	};

	const nameOrABNQuery = (query, guid) => {
		let url;
		let removeString;

		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'text/plain; charset=ISO-8859-1');

		if (typeof Number(query) === 'number' && query.length === 11) {
			console.log(`number`);
			url = `https://abr.business.gov.au/json/AbnDetails.aspx?callback=callback&abn=${query}&guid=${guid}`;
			removeString = 'callback(';
		} else {
			console.log(`names`);
			url = `https://abr.business.gov.au/json/MatchingNames.aspx?callback=nameCallback&name=${query}&guid=${guid}`;
			removeString = 'nameCallback(';
		}

		fetch(url)
			.then((response) => {
				return response.text();
			})
			.then((result) => {
				let hash = result.replace(removeString, '');
				hash = hash.slice(0, -1);
				console.log(JSON.parse(hash));
				setData(JSON.parse(hash));
				setIsLoading(false);
				guidValue.current.value = '';
				queryValue.current.value = '';
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
				setIsError(true);
			});
	};

	return (
		<div className="homepage-container">
			<h1>Company Finder</h1>

			<form onSubmit={(e) => handleSubmit(e)}>
				<input type="text" placeholder="Enter GUID here" ref={guidValue} required />
				<input type="text" placeholder="Company name or ABN" ref={queryValue} required />
				<button type="submit">Submit</button>
			</form>

			{isError ? <p className="error-message">GUID Key is incorrect, please check again</p> : null}

			{isLoading ? (
				<h2>Loading...</h2>
			) : data ? (
				<div className="results-container">
					{data.Message.length === 0 && !isError ? (
						<ul>
							{data.Names.map((company) => (
								<Company key={`${company.Name} ${company.Abn}`} companyData={company} />
							))}
						</ul>
					) : (
						<p>
							No results for <span className="lookup">{queryValue.current.value}</span>
						</p>
					)}
				</div>
			) : null}
		</div>
	);
};

export default Home;
