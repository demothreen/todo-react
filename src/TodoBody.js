import React, {Component} from 'react';
import ToDos from './ToDos';

class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: JSON.parse(localStorage.getItem('todo')) || []
        };
    }

    /**
     * Создание тудушек
     */
    userTodo() {
        const todoItem = {
            todo: this.state.value.trim(),
            id: this.generateId(),
            check: false,
            delTodo: false,
        };

        this.setState({
            value: '',
            list: [todoItem].concat(this.state.list)
        }, () => {
            this.syncData();
        });
    }

    /**
     * синхронизация с локалсторадж
     */
    syncData() {
        localStorage.setItem('todo', JSON.stringify(this.state.list));
    }

    generateId() {
        return '_' + Math.floor(Math.random() * 10000);
    }

    onHandleTodoClick(todoClicked) {
        const list = this.state.list.map((todoItem) => {
            if (todoItem.id === todoClicked.id) {
                todoItem.check = !todoItem.check
            }
            return todoItem;
        })

        this.setState({list}, () => {
            this.syncData();
        });
    }

    /**
     * Удаление выполненных
     */
    removeDone() {
        const unCheckedTodos = this.state.list.filter((todoItem) => {
            return !todoItem.check
        });

        this.setState({list: unCheckedTodos}, () => {
            this.syncData();
        });
    }

    /**
     * Удаление всех
     */
    removeAll() {
        this.setState({list: []}, () => {
            this.syncData();
        });
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
