import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: '',
        description : '',
        date : ''
    }
    setTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    setDescription = (e) => {
        this.setState({ description: e.target.value })
    }
    setDate = (e) => {
        this.setState({ date: e.target.value })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({ title : '', description : '',date: ''});
    }

    
    render() {
        return (
            <div>
                <h1>Add a Todo:</h1>
                <form onSubmit={this.onSubmit} style={{marginLeft:20}}>
                    <input type='text' placeholder='Todo Title...' value={this.state.title} onChange={this.setTitle}/> <br/>
                    <input type='text' placeholder='Todo Description...' value={this.state.description} onChange={this.setDescription}/> <br/>
                    <input type='Date' placeholder='Todo Due-date...' value={this.state.date} onChange={this.setDate}/> <br/>
                    <input type='submit' value='Add Todo'/>
                </form>
            </div>
        );
    }
}

export default AddTodo;