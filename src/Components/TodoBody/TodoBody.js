import React, {Component} from 'react';
import ToDos from './../ToDos/ToDos';
import Input from './../Input/Input';
import Button from './../Button/Button';

class TodoBody extends Component {

    state = {
        value: '',
        list: JSON.parse(localStorage.getItem('todo')) || []
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.list !== prevState.list) {
            this.syncData();
        }
    }

    syncData = () => {
        localStorage.setItem('todo', JSON.stringify(this.state.list));
    }

    generateId = () => {
        return '_' + Math.floor(Math.random() * 10000);
    }

    addTodo = () => {
        const todoItem = {
            todo: this.state.value.trim(),
            id: this.generateId(),
            check: false,
            delTodo: false,
        };

        this.setState({
            value: '',
            list: [todoItem].concat(this.state.list)
        })
    }

    removeOne = (event, id) => {
        event.stopPropagation();
        const newTodos = this.state.list.filter(todoItem => todoItem.id !== id);
        this.setState({list: newTodos});
    }

    removeDone = () => {
        const unCheckedTodos = this.state.list.filter(todoItem => !todoItem.check);
        this.setState({list: unCheckedTodos});
    }

    removeAll = () => this.setState({list: []});

    handleTodoClick = (todoClicked) => {
        const list = this.state.list.map((todoItem) => {
            if (todoItem.id === todoClicked.id) {
                todoItem.check = !todoItem.check
            }
            return todoItem;
        })

        this.setState({list});
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.addTodo()
        }
    }

    handleInputChange = event => this.setState({value: event.target.value});

    render() {
        return (
            <div>
                <div className="well row" style={{margin: '0'}}>
                    <Input
                        value={this.state.value}
                        handleKeyPress={this.handleKeyPress}
                        handleChange={this.handleInputChange}
                    />
                    <Button
                        disabled={!this.state.value.trim()}
                        handleClick={this.addTodo}
                        text={'Добавить'}
                        type={'success'}
                    />
                </div>
                <div>
                    <Button
                        handleClick={this.removeDone}
                        text={'Удалить выполненные'}
                        type={'danger'}
                    />
                    <Button
                        handleClick={this.removeAll}
                        text={'Удалить всё'}
                        type={'danger'}
                    />
                </div>
                <ToDos
                    data={this.state.list}
                    handleTodoClick={this.handleTodoClick} 
                    handleRemoveClick={this.removeOne}
                />
            </div>
        );
    }
}

export default TodoBody;
