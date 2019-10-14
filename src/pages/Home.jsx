import React, { useState, useRef } from 'react';

import FormPanel from '../components/FormPanel';
import ResultsPanel from '../components/ResultsPanel';
import './home.scss';

const Home = () => {
    const guidValue = useRef('');
    const queryValue = useRef('');
    const [data, setData] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        resetErrorMessage()
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
                let hash = result.replace(removeString, '').slice(0, -1);
                hash = JSON.parse(hash);
                removeString === 'nameCallback(' ? setData(hash.Names) : setData([hash]);
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const createUniqueKey = (company) => {
        return company.Name ? `${company.Name}${company.Abn}` : `${company.EntityName}${company.Abn}`;
    };

    const resetErrorMessage = () => isError ? setIsError(false) : null;


    return (
        <>
            <div className="homepage-container">
                <h1 className="homepage-title">ABN LOOKUP</h1>

                <p className="homepage-description">Search by ABN or name. You will need a GUID key to search.</p>

                <FormPanel isError={isError} guidValue={guidValue} queryValue={queryValue} handleSubmit={handleSubmit} />

                {isError ? <p className="error-message">GUID Key is incorrect, please check again</p> : null}
            </div>
            <>
                {isLoading ?
                    <h2>LOADING...</h2> : <ResultsPanel data={data} queryValue={queryValue} createUniqueKey={createUniqueKey} />}
            </>
        </>
    );
};

export default Home;
