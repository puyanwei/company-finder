import React, { useState } from 'react';

import './company.scss';

const Company = ({ companyData }) => {
	const [ isHidden, setIsHidden ] = useState(true);

	const { Name, Abn } = companyData;
	return (
		<li className="company-title" onClick={() => setIsHidden(!isHidden)}>
			{Name} {Abn}
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
