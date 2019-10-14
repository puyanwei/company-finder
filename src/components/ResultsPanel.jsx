import React from 'react'
import Company from './Company';
import './resultsPanel.scss'

const resultsPanel = ({data, queryValue, createUniqueKey})=> {
    return (
        <>
            {data ? 
                <div className="results-container">
                    <p className="query-message">{data.length} RESULT{data.length !== 1? "S": null} FOR <span className="query">"{queryValue.current.value}"</span></p>
                    <ul>
                        {data.map(company => <Company companyData={company} key={createUniqueKey(company)} />)}
                    </ul>
                </div>
            : null}
        </>    
    )
}

export default resultsPanel
