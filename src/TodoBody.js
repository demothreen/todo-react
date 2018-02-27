import React, {Component} from 'react';
import ToDos from './ToDos';

//todo: реализовать удаление всех сделанных, а не по одному;
//todo: после перезагрузки массив заново перезаполняется, поправить
//todo: если Done при добавлении нового становится unDone

class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            list: '',
            todos: []
        };
    }

    componentWillMount() {
        this.setState({
            list: JSON.parse(localStorage.getItem('todo'))
        })
    }

    userTodo() {
        this.state.todos.push({
            todo: this.state.value.replace(/\s+/g, ''),
            id: this.generateId(),
            check: false,
        })
        this.syncData(this.state.todos);
    }

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

    removeDone() {
        let list = this.state.list;

        for (let i in list) {
            if(list[i].check === true){
                let index = list.indexOf(list[i]);
                list.splice(index, 1);
            }
        }
        this.setState({
            todos: list
        })
        this.syncData(list);
    }

    removeAll() {
        this.setState({
            list: '',
            value: '',
            todos: [],
        });
        delete localStorage['todo'];
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
