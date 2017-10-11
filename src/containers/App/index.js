import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import QueueBoard from '../QueueBoard';
import AddForm from '../AddForm';
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
          <div className="pageTitle navElement">KANBAN BOARD</div>
          <div className="pageLogo navElement"><img src={logo} className="App-logo" alt="logo" /></div>
          <OpenAddForm onPlusClick={()=>{this.onPlusClick()}} />
        </div>
        <div className="dashboardContainer">
          <QueueBoard filterBy="queued up" title="QUEUED UP" buttonText="STARTED"/>
          <QueueBoard filterBy="in progress" title="IN PROGRESS" buttonText="FINISHED"/>
          <QueueBoard filterBy="completed" title="COMPLETED" buttonText="ARCHIVE"/>

        </div>
        <AddForm shown={this.state.addTaskModal} onAddClick={this.onAddClick} />
      </div>
    );
  }
}


export default App;
