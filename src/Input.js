import React from 'react';
import PropTypes from 'prop-types';

const Input = ({value, handleKeyPress, handleChange}) => {
  return (
    <input
        type="text"
        size="40"
        placeholder="Введите текст"
        style={style}
        value={value}
        onKeyPress={handleKeyPress}
        onChange={event => handleChange(event)}
    />
  );
}

export default Input;

Input.propTypes = {
    value: PropTypes.string.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

const style = {
    borderRadius: "5px",
    height: '32px',
    borderWidth: 'thin',
    paddingLeft: '5px'
};