import React, { useState } from 'react';

import './company.scss';

const Company = ({ companyData, title }) => {
	const [ isHidden, setIsHidden ] = useState(true);

	const { Abn } = companyData;
	return (
		<li className="company-title" onClick={() => setIsHidden(!isHidden)}>
			{title}
			{!isHidden ? (
				<ul>
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
