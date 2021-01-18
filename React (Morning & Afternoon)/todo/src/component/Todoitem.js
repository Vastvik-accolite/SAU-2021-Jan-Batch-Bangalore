import React, { Component } from 'react';
import './Todoitem.css';

class Todoitem extends Component {
    getStyle = () =>{
        if(!this.props.todo.isCompleted){
            return {
                textDecoration : 'line-through'
              }
        }
        else{
            return {
                textDecoration : 'none'
              }
        }
    }
    render() {
        const { id,title,description,date } = this.props.todo;
        return (
            <div style = {this.getStyle()}>
                
                <p className='para'>
                <input type='checkbox' onChange={this.props.markedCompleted.bind(this,id)}></input>
                   <span> <b>Title:</b> { title } <b>Description:</b> { description } <b>Date:</b> { date } </span>
                <button className='btn' onClick = {this.props.delTodo.bind(this,id)}> Delete </button>
                </p>
            </div>
        );
    }
}

export default Todoitem;