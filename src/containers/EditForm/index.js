import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editTask} from '../../actions';

class EditForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      task: '',
      priority: 'low',
      createdBy: '',
      assignedTo: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.closeOnClickOutside = this.closeOnClickOutside.bind(this);

  }

  componentDidMount() {

    console.log('this is the current tasks array', this.props.tasks);
    console.log('this is the props', this.props);

    let filteredTaskArr = this.props.tasks.filter(task => {
      return task.id === this.props.targetTaskId;
    });

    if(filteredTaskArr.length === 0 || filteredTaskArr.length > 1){
      console.log('something went terribly wrong');
    }

    let targetTask = filteredTaskArr[0];

    console.log('this is our target task', targetTask);
    this.setState({
      id: targetTask.id,
      task: targetTask.task,
      priority: targetTask.priority,
      createdBy: targetTask.createdBy,
      assignedTo: targetTask.assignedTo
    });
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});
  }

  saveTask(e){
    e.preventDefault();
    let taskToEdit = {...this.state};
    console.log('our task to Edit', taskToEdit);

    this.props.editTask(taskToEdit);
    this.props.closeEditForm();
  }

  closeOnClickOutside(e){
    if(e.target.className.indexOf('formModal') > -1){
      this.props.closeEditForm();
    }
  }


  render() {
    return (
      <div className="formModal" onClick={this.closeOnClickOutside}>
        <form onSubmit={this.saveTask.bind(this)} className="formContainer">
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
            <button type="submit" className="formButton">Save Task</button>
          </div>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    tasks: state.cards
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTask: (task) => {
      dispatch(editTask(task));
    }
  }
}

EditForm = connect(
  mapStateToProps,
  mapDispatchToProps
  )(EditForm);

export default EditForm;