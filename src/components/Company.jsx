import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './company.scss';

const Company = ({ companyData }) => {
    const [isHidden, setIsHidden] = useState(true);

    const ignoreParentClick = (e) => {
        e.stopPropagation();
    };

    return (
        <li className="company-title" onClick={() => setIsHidden(!isHidden)}>
            {companyData.Name || companyData.EntityName}
            <span className="toggle-icon">{isHidden ? '+' : '-'}</span>

            {!isHidden ? (
                <ul onClick={(e) => ignoreParentClick(e)}>
                    {Object.keys(companyData).map((key) => (
                        <li className="company-details" key={`${key} ${companyData[key]}`}>
                            {key}: {companyData[key]}
                        </li>
                    ))}
                </ul>
            ) : null}
        </li>
    );
};

Company.propTypes = {
    companyData: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Company;
