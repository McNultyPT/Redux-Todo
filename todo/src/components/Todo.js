import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleCompleted, clearCompleted } from '../actions';

class Todo extends React.Component {
    state = {
       newTodo: ''
    };

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
    }

    toggleCompleted = (e, index) => {
        e.preventDefault();
        this.props.toggleCompleted(index);
    }

    clearCompleted = (e) => {
        e.preventDefault();
        this.props.clearCompleted();
    }

    render() {
        return (
            <div className='todoContainer'>
                <div className='listContainer'>
                    <h2>Todo List</h2>
                    <div className='todoItems'>
                        {this.props.todos.map((todo, index) => (
                            <ul
                                className={todo.completed ? 'completed' : ''}
                                key={index}
                                onClick={e => this.toggleCompleted(e, index)}
                            >
                            {todo.value}
                            </ul> 
                        ))}
                    </div>
                </div> 
                <div className='inputContainer'> 
                    <input
                        type='text'
                        value={this.state.newTodo}
                        onChange={this.handleChanges}
                    />
                    <button onClick={this.addTodo}>Add Todo</button>
                    <button onClick={this.clearCompleted}>Clear Completed</button>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStatetoProps, { addNewTodo, toggleCompleted, clearCompleted })(Todo);

