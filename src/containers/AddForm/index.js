import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask} from '../../actions';

class AddForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      task: '',
      priority: 'LOW',
      createdBy: '',
      assignedTo: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  addTask(e){
    e.preventDefault();

    this.props.addTask({...this.state});
    // console.log('this is our new task from state', this.state);
    this.props.onAddClick();
    this.setState({
      task: '',
      priority: 'LOW',
      createdBy: '',
      assignedTo: ''
    });

  }

  closeOnClickOutside(e){

    if(e.target.className.indexOf('formModal') > -1){
      this.setState({priority: 'LOW'});
      this.props.onAddClick();
    }
  }

  render() {
    return (
      <div className="formModal" style={{visibility: this.props.shown}} onClick={this.closeOnClickOutside}>
        <form onSubmit={this.addTask.bind(this)} className="formContainer">
          <div className="input">
            <label>Task</label>
            <input type="text" name="task" placeholder="Task" value={this.state.task} onChange={this.handleChange}/>
          </div>
          <div className="input">
            <label>Priority</label>
            <select name="priority" value={this.state.priority} onChange={this.handleChange}>
              <option value="low">LOW</option>
              <option value="medium">MEDIUM</option>
              <option value="high">HIGH</option>
            </select>
          </div>
          <div className="input">
            <label>Created by</label>
            <input type="text" name="createdBy" placeholder="Creator" value={this.state.createdBy} onChange={this.handleChange}/>
          </div>
          <div className="input">
            <label>Assigned to</label>
            <input type="text" name="assignedTo" placeholder="Assigned" value={this.state.assignedTo} onChange={this.handleChange} />
          </div>
          <div className="inputBtn">
            <button type="submit" className="formButton">Add Task</button>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    addFormVisibility: state.addFormVisibility
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (taskObj) => {
      dispatch(addTask(taskObj));
    }
  }
}

AddForm = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AddForm);

export default AddForm;