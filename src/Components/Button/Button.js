import React from 'react';
import PropTypes from 'prop-types';

const Button = ({handleClick, type, text, disabled=false}) => {
    return(
        <button
            type="button"
            className={"btn button btn-" + type}
            style={{margin: '5px'}}
            onClick={handleClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool
};

export default Button;