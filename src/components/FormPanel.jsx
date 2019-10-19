import React from 'react';
import PropTypes from 'prop-types';

import './formPanel.scss';

const FormPanel = ({ guidValue, queryValue, handleSubmit, handleKeyPress }) => {
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="container-input">
				<label>GUID KEY</label>
				<input type="text" name="guid" onChange={(e) => handleKeyPress(e)} required />
			</div>
			<div className="container-input">
				<label>SEARCH</label>
				<input type="text" name="query" onChange={(e) => handleKeyPress(e)} required />
			</div>
			<button type="submit">SUBMIT</button>
		</form>
	);
};

FormPanel.propTypes = {
	guidValue: PropTypes.arrayOf(PropTypes.object).isRequired,
	queryValue: PropTypes.arrayOf(PropTypes.object).isRequired,
	handleSubmit: PropTypes.func.isRequired
};

export default FormPanel;
