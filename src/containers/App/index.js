import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import QueueBoard from '../QueueBoard';
import AddForm from '../AddForm';
import EditForm from '../EditForm';
import OpenAddForm from '../../components/OpenAddForm';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      addTaskModal: 'hidden'
    }

    this.onAddClick = this.onAddClick.bind(this);
  }

  onPlusClick(){
    this.setState({
      addTaskModal: 'visible'
    })
  }

  onAddClick(){
    this.setState({
      addTaskModal: 'hidden'
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <OpenAddForm onPlusClick={()=>{this.onPlusClick()}} />
        <div className="dashboardContainer">
          <QueueBoard filterBy="queue" title="Queued Up" buttonText="STARTED"/>
          <QueueBoard filterBy="in progress" title="In Progress" buttonText="FINISHED"/>
          <QueueBoard filterBy="done" title="Completed" buttonText="ARCHIVE"/>

        </div>
        <AddForm shown={this.state.addTaskModal} onAddClick={this.onAddClick} />
      </div>
    );
  }
}


export default App;
