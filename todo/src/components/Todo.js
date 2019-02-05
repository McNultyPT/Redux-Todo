import React from 'react';
import { connect } from 'react-redux';

import { newTodo } from '../actions';

const Todo = props => {
    return (
       <div>
           <h1>Hello</h1>
       </div>
    );
}

const mapStatetoProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStatetoProps, {newTodo})(Todo);

