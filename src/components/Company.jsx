import React, { useState } from 'react';

import './company.scss';

const Company = ({ companyData, title }) => {
	const [ isHidden, setIsHidden ] = useState(true);

	const ignoreParentClick = (e) => {
		e.stopPropagation();
	};

	return (
		<li className="company-title" onClick={() => setIsHidden(!isHidden)}>
			{title}
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

export default Company;
