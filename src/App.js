import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';
import FormInput from './components/FormInput';
import EditModal from './components/EditModal';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Reading books"
      },
      {
        id: 2,
        title: "Studing"
      }
    ],

    isEdit: false
  }

  openModal = () => {
    this.setState({
      isEdit: true
    })
  }
  closeModal = () => {
    this.setState({
      isEdit: false
    })
  }
  
  deleteTast = id =>{
    this.setState({
      todos: this.state.todos.filter(item => item.id != id)
    })
  }
  addTask = data =>{
    const id = this.state.todos.length;
    const newData = {
      id: id + 1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos, newData]
    })
  }
  render(){
    const {todos} = this.state;
    return (
      <div className="App">
        <div className='logo-item'>
          <img src={logo} className="logo" alt="logo" />
          <h1 className='title'>TODO LIST</h1>
        </div>
        <div className='component'>
          <div className='list'>
            {todos.map(item =>
            <TodoItem 
              key={item.id} 
              todo={item} 
              del={this.deleteTast}
              // closeModal={this.closeModal}
              openModal={this.openModal}
            />
            )}
          </div>
          <div className='input-form'>
            <FormInput add={this.addTask}/>
          </div>
          <EditModal edit={this.state.isEdit} closeModal={this.closeModal}/>
        </div>
        
      </div>
    );
  }
 
}

export default App;
