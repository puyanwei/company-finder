import React, { useState } from 'react';

import FormPanel from '../components/FormPanel';
import ResultsPanel from '../components/ResultsPanel';
import './home.scss';

const Home = () => {
    const [formInput, setFormInput] = useState({ guid: "", query: "" });
    const [state, setState] = useState({ isError: false, isLoading: false });
    const [formData, setFormData] = useState(null);

    const { isError, isLoading } = state
    const { guid, query } = formInput

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting...');
        setState({ ...state, isLoading: true });
        nameOrABNQueryURL();
    };

    const handleKeyPress = (e) => {
        const { name, value } = e.target;
        name === "guid"
            ?
            setFormInput({ ...formInput, guid: value })
            : setFormInput({ ...formInput, query: value })
    }

    const nameOrABNQueryURL = () => {
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
                let hash = result.replace(removeString, '').slice(0, -1);
                hash = JSON.parse(hash);
                removeString === 'nameCallback(' ? setFormData(hash.Names) : setFormData([hash]);
            })
            .catch((err) => {
                console.log(err);
                setState({ isLoading: false, isError: true })
            })
            .finally(() => {
                setState({ isLoading: false, ...state })
            });
    };

    const createUniqueKey = (company) => `${company.EntityName}${company.Abn}`;

    return (
        <>
            <div className="homepage-container">
                <h1 className="homepage-title">ABN LOOKUP</h1>

                <p className="homepage-description">Search by ABN or name. You will need a GUID key to search.</p>

                <FormPanel isError={isError} handleSubmit={handleSubmit} handleKeyPress={handleKeyPress} />

                {isError ? <p className="error-message">GUID Key is incorrect, please check again</p> : null}
            </div>
            <>
                {isLoading
                    ?
                    <h2>LOADING...</h2>
                    : <ResultsPanel data={formData} queryValue={query} createUniqueKey={createUniqueKey} />}
            </>
        </>
    );
};

export default Home;
