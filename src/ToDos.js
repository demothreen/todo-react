import React, { Component } from 'react';

class ToDos extends Component {
    render() {
        let data = this.props.data;
        console.log('data', data)
        return (
            <div>
                <br/>
                <ul>
                    {data ?
                    <li style={{
                        cursor: 'pointer',
                        position: 'relative',
                        display: 'block',
                        padding: '12px 8px 12px 40px',
                        background: '#d3d3cf',
                        fontSize: '18px',
                        transition: '0.2s',
                        listStyleType: 'none',
                        borderRadius: '7px',
                        //border: '1px solid #232322'
                    }}
                        onClick={() => this.props.onHandleTodoClick(data.id)}>
                        {data.todo}
                    </li>
                        : ' '}
                </ul>
            </div>
        );
    }

}

export default ToDos;
