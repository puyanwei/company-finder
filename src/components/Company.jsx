import React from 'react';

const Company = ({ data }) => {
	const { Name, Abn, Score } = data;
	return (
		<li>
			{Abn} {Name} {Score}
		</li>
	);
};

export default Company;
