import React, { Component } from 'react';

class ToDos extends Component {
    render() {
        let data = this.props.data;
        console.log('data', data)
        return (
            <div>
                <br/>
                <ul style={{padding: '0 30%'}}>
                    {data ? data.map(option =>
                    <li style={{
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
                    }}
                        onClick={() => this.props.onHandleTodoClick(option.id)}>
                        {option.todo}
                    </li>

                    ) : ' '}
                    <br/>
                </ul>
            </div>
        );
    }

}

export default ToDos;
