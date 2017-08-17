import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask} from '../../actions';

class AddForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      task: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  addTask(e){
    e.preventDefault();

    this.props.addTask({...this.state});
    console.log('this is our new task from state', this.state);
    this.props.onAddClick();

  }


  render() {
    return (
      <div className="formModal" style={{visibility: this.props.shown}}>
        <form onSubmit={this.addTask.bind(this)} className="formContainer">
          <div className="input">
            <label>Task</label>
            <input type="text" name="task" placeholder="Task" value={this.state.task} onChange={this.handleChange}/>
          </div>
          <div className="input">
            <label>Priority</label>
            <select name="priority" onChange={this.handleChange}>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
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