import React, {Component} from 'react';
import ToDos from './ToDos';

class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: '',
            todos: [],
        };
    }

    componentWillMount() {
        this.state.list = JSON.parse(localStorage.getItem('todo'));
    }

    userTodo() {
        this.state.todos.push({
            todo: this.state.value.replace(/\s+/g, ''),
            id: this.generateId(),
            check: false,
        })

        this.setState({
            list: this.state.todos,
        })

        this.syncData(this.state.todos);
    }

    syncData(todo) {
        localStorage.setItem('todo', JSON.stringify(todo));
    }

    generateId() {
        let id = '_' + Math.floor(Math.random() * 10000);
        return id;
    }

    handleTodoClick(todoId) {
        console.log('todoId', todoId)
    }

    removeDone() {

    }

    removeAll() {
        this.setState({
            list: '',
            value: ''
        })
        delete localStorage['todo'];
    }

    render() {
        console.log('list', this.state.list)
        return (
            <div>
                <div className="well row" style={{margin: '0'}}>
                    <input type="text" size="40" placeholder="Введите текст"
                           style={{
                               borderRadius: "5px",
                               height: '32px',
                               borderWidth: 'thin',
                               paddingLeft: '5px'
                           }}
                           value={this.state.value}
                           onChange={(event) => this.setState({value: event.target.value})}
                    />
                    <button type="button" className="btn button btn-success"
                            onClick={() => this.userTodo()}
                            disabled={!this.state.value.trim()}
                    >Добавить
                    </button>
                </div>
                <div>
                    <button type="button"
                            className="btn butt btn-danger"
                            style={{margin: '7px'}}
                            onClick={this.removeDone()}
                    >Удалить выполненные
                    </button>
                    <button
                        type="button"
                        className="btn butt btn-danger"
                        onClick={() => this.removeAll()}
                    >Удалить всё
                    </button>
                </div>
                <ToDos data={this.state.list} onHandleTodoClick={this.handleTodoClick}/>
            </div>
        );
    }
}

export default TodoBody;
