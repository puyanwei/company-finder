import React from 'react'
import PropTypes from 'prop-types'


import Company from './Company';
import './resultsPanel.scss'

const ResultsPanel = ({ data, queryValue, createUniqueKey }) => {
    
    return (
        <>
            {data ? 
                <div className="results-container">
                    <p className="query-message">{data.length} RESULT{data.length !== 1? "S": null} FOR <span className="query">"{queryValue}"</span></p>
                    <ul>
                        {data.map(company => <Company companyData={company} key={createUniqueKey(company)} />)}
                    </ul>
                </div>
            : null}
        </>    
    )
}

ResultsPanel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    queryValue: PropTypes.object.isRequired,
    createUniqueKey: PropTypes.func.isRequired
};

export default ResultsPanel
