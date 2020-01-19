import React, { Component } from 'react';
import Item from './TodoItem';

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>todo list</h1>
                <Item></Item>
            </div>
        )
    }
}
