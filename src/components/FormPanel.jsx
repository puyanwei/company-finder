import React from 'react';
import PropTypes from 'prop-types';

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

FormPanel.propTypes = {
    guidValue: PropTypes.object.isRequired,
    queryValue: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default FormPanel;
