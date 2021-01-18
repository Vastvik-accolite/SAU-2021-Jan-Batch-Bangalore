import React , {Component} from 'react';
import Todo from './component/Todo';
import AddTodo from './component/AddTodo';

class App extends Component {
  
  state = {
    todos : [
    ]
  }

  markedCompleted = (id) =>{
    this.setState( { todos : this.state.todos.map(todo => {
      if(todo.id === id)
      {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    })})
  }
  delTodo = (id) =>{
    this.setState ({ todos : [...this.state.todos.filter(todo => todo.id !== id )]})
  }
  componentDidUpdate(previousProps, previousState){
    var byDate = this.state.todos.slice(0);
    let sortedTodo = byDate.sort((a, b) =>
    a.date.split('/').reverse().join().localeCompare(b.date.split('/').reverse().join()));
    console.log(sortedTodo);
  }
  addTodo = (val) =>{
    const newTodo = {
      id : Math.random(),
      ...val,
      isCompleted :  true,
    }
    
    this.setState({ todos : [...this.state.todos, newTodo]})
  } 
  
  render()
  {
    return(
        <div>
          <AddTodo addTodo = {this.addTodo}></AddTodo>
          <Todo todos = {this.state.todos}
            markedCompleted = {this.markedCompleted}
            delTodo = {this.delTodo}/>
        </div>
    );
  }
}

export default App;