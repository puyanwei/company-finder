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
		setIsLoading(true);
		nameOrABNQueryURL();
	};

	const nameOrABNQueryURL = () => {
		let query = queryValue.current.value;
		let guid = guidValue.current.value;
		let removeString;
		let url;

		if (typeof Number(query) === 'number' && query.length === 11) {
			url = `AbnDetails.aspx?callback=callback&abn=${query}&guid=${guid}`;
			removeString = 'callback(';
		} else {
			url = `MatchingNames.aspx?callback=nameCallback&name=${query}&guid=${guid}`;
			removeString = 'nameCallback(';
		}
		fetchData(url, removeString);
	};

	const fetchData = (url, removeString) => {
		const myHeaders = new Headers();
		myHeaders.append('Content-Type', 'text/plain; charset=ISO-8859-1');

		fetch(`https://abr.business.gov.au/json/${url}`)
			.then((response) => {
				return response.text();
			})
			.then((result) => {
				let hash = result.replace(removeString, '');
				hash = hash.slice(0, -1);
				setData(JSON.parse(hash));
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
				setIsError(true);
            })
            .finally(()=> {
                setIsLoading(false);
				guidValue.current.value = '';
				queryValue.current.value = '';
            })
	};

	return (
		<div className="homepage-container">
			<h1 className="homepage-title">ABN Lookup</h1>

            <p className="homepage-description">Search by ABN or name. You will need a GUID key to search.</p>

			<form onSubmit={(e) => handleSubmit(e)}>
                <label>GUID key</label>
				<input type="text" ref={guidValue} required />
                <br/>
                <label>Search</label>
				<input type="text" ref={queryValue} required />
                <br/>
				<button type="submit">Submit</button>
			</form>

			{isError ? <p className="error-message">GUID Key is incorrect, please check again</p> : null}

			{isLoading ? (
				<h2>Loading...</h2>
			) : data ? (
				<div className="results-container">
					{data.Message.length === 0 && !isError ? (
						<ul>
							{data.EntityName?
							<Company key={`${data.EntityName} ${data.Abn}`} companyData={data} title={data.EntityName} />
                            :
							<>
                            {data.Names.map((company) => (
								<Company key={`${company.Name} ${company.Abn}`} companyData={company} title={company.Name} />
							))}
                            </>
							}
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
