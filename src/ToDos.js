import React, {Component} from 'react';

class ToDos extends Component {
    render() {
        let data = this.props.data;
        return (
            <div>
                <br/>
                <ul style={{padding: '0 30%'}}>
                    {data ? data.map(option =>
                        <li key={option.id}
                            style={
                                option.check === true ? STYLES.checkTrue : STYLES.checkFalse
                            }
                            onClick={() => this.props.handleTodoClick(option)}>
                            {option.todo}
                            <span className = "glyphicon glyphicon-remove"
                                style = {STYLES.delete_button}
                                onClick = {e => this.props.removeOne(e, option.id)} />
                        </li>
                    ) : []}
                    <br/>
                </ul>
            </div>
        );
    }
}

export default ToDos;

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
