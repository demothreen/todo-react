import React from 'react';
import ToDo from './../ToDo/ToDo';
import PropTypes from 'prop-types';

const ToDos = ({data, handleTodoClick, handleRemoveClick}) => {
    return (
        <div>
            <br/>
            <ul style={{padding: '0 30%'}}>
                {data ? data.map((option, index) => {
                    return (
                        <ToDo
                            key={option + index}
                            option={option}
                            handleTodoClick={handleTodoClick}
                            handleRemoveClick={handleRemoveClick} 
                        />
                    )
                }) : null}
                <br/>
            </ul>
        </div>
    );
}

export default ToDos;

ToDos.propTypes = {
    data: PropTypes.array,
    handleTodoClick: PropTypes.func.isRequired,
    handleRemoveClick: PropTypes.func.isRequired
};
