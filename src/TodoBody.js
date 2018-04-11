import React, {Component} from 'react';
import ToDos from './ToDos';

class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: [],
        };
    }

    componentWillMount() {
        this.setState({
            list: JSON.parse(localStorage.getItem('todo'))
        })
    }

    /**
     * Создание тудушек
     */
    userTodo() {
        this.state.list = this.state.list || []
        this.state.list.push({
            todo: this.state.value.replace(/\s+/g, ''),
            id: this.generateId(),
            check: false,
            delTodo: false,
        })
        this.setState({
            value: ''
        })
        this.syncData(this.state.list);
    }

    /**
     * синхронизация с локалсторадж
     */
    syncData(todo) {
        this.setState({
            list: todo,
        });
        localStorage.setItem('todo', JSON.stringify(todo));
    }

    generateId() {
        let id = '_' + Math.floor(Math.random() * 10000);
        return id;
    }

    onHandleTodoClick(todoId) {
        let resultSave = JSON.parse(localStorage.getItem('todo'));

        for (let i in resultSave) {
            if (resultSave[i].id === todoId.id) {
                resultSave[i].check = !resultSave[i].check;
            }
        }
        this.syncData(resultSave);
    }

    /**
     * Удаление выполненных
     */
    removeDone() {
        let list = this.state.list;

        for (let i in list) {
            if (list[i].check === true) {
                delete list[i];
            }
        }
        let arr = list.filter((x) => {
            return x !== null
        });

        this.setState({
            list: arr
        })
        this.syncData(arr);
    }

    /**
     * Удаление всех
     */
    removeAll() {
        this.setState({
            list: '',
            value: '',
        });
        delete localStorage['todo'];
    }
    _handleKeyPress= (e) => {
        if (e.key === 'Enter') {
            this.userTodo()
        }
    }

    render() {
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
                           onKeyPress={this._handleKeyPress}
                           onChange={(event) => this.setState({value: event.target.value})}
                    />
                    <button type="button"
                            className="btn button btn-success"
                            style={{margin: '5px'}}
                            onClick={() => this.userTodo()}
                            disabled={!this.state.value.trim()}
                    >Добавить
                    </button>
                </div>
                <div>
                    <button type="button"
                            className="btn butt btn-danger"
                            style={{margin: '5px'}}
                            onClick={() => this.removeDone()}
                    >Удалить выполненные
                    </button>
                    <button
                        type="button"
                        className="btn butt btn-danger"
                        onClick={() => this.removeAll()}
                    >Удалить всё
                    </button>
                </div>
                <ToDos data={this.state.list} handleTodoClick={this.onHandleTodoClick.bind(this)}/>
            </div>
        );
    }
}

export default TodoBody;
