import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo } from '../actions';

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

    render() {
        return (
            <div>
                <div>
                    {this.props.todos.map((todo, index) => (
                        <h3
                            className='completed'
                            key={index}
                        >
                        {todo.value}
                        </h3> 
                    ))}
                </div>
                <input
                    type='text'
                    value={this.state.newTodo}
                    onChange={this.handleChanges}
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStatetoProps, {addNewTodo})(Todo);

