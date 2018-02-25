import React, {Component} from 'react';
import ToDos from './ToDos';

class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: {},
        };
    }

    componentWillMount() {
        this.state.list = JSON.parse(localStorage.getItem('todo'));
    }

    userTodo() {

        let todo = {};

        todo.todo = this.state.value.replace(/\s+/g, '');
        todo.id = this.generateId();
        todo.check = false;


        this.setState({
            list: todo,
        })

        this.syncData(todo);
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
        console.log('todolist', this.state.todolist)
        console.log('list', this.state.list)
        return (
            <div>
                <div className="well row">
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
                    <button type="button" className="btn butt btn-danger"
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
