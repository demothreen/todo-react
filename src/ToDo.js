import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({option, handleTodoClick, handleRemoveClick}) => {
    return (
        <li key={option.id}
          style={option.check ? STYLES.checkTrue : STYLES.checkFalse}
          onClick={() => handleTodoClick(option)}>
          {option.todo}
          <span className = "glyphicon glyphicon-remove"
              style = {STYLES.delete_button}
              onClick = {e => handleRemoveClick(e, option.id)} />
        </li>
    );
}

export default ToDo;

ToDo.propTypes = {
    option: PropTypes.object.isRequired,
    handleTodoClick: PropTypes.func.isRequired,
    handleRemoveClick: PropTypes.func.isRequired
};

const STYLES = {
  checkTrue: {
      cursor: 'pointer',
      position: 'relative',
      display: 'block',
      padding: '12px 8px 12px 40px',
      background: '#6cd074',
      fontSize: '18px',
      transition: '0.2s',
      listStyleType: 'none',
      borderRadius: '7px',
      marginBottom: '2px',
      textDecoration: 'line-through'
  },
  checkFalse: {
      cursor: 'pointer',
      position: 'relative',
      display: 'block',
      padding: '12px 8px 12px 40px',
      background: '#ccffd0',
      fontSize: '18px',
      transition: '0.2s',
      listStyleType: 'none',
      borderRadius: '7px',
      marginBottom: '2px',
  },
  delete_button: {
      position: 'absolute',
      margin: '15px auto 15px 20px',
      right: '20px',
      color: 'red'
  }
};