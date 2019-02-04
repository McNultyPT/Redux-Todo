import React from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStatetoProps, {})(Todo);

