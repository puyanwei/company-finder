import React from 'react';
import './formPanel.scss';

const FormPanel = ({ guidValue, queryValue, handleSubmit }) => {
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<div className="container-input">
				<label>GUID KEY</label>
				<input type="text" ref={guidValue} required />
			</div>
			<div className="container-input">
				<label>SEARCH</label>
				<input type="text" ref={queryValue} required />
			</div>
			<button type="submit">SUBMIT</button>
		</form>
	);
};

export default FormPanel;
