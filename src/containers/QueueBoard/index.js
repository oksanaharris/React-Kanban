import React, { Component } from 'react';
import {connect} from 'react-redux';
import {nextStageAction} from '../../actions';
import {previousStageAction} from '../../actions';
import {deleteTaskAction} from '../../actions';
import {moveToColumnAction} from '../../actions';
// import {loadTasks} from '../../actions';
import Card from '../../components/Card';
import EditForm from '../EditForm';


class QueueBoard extends Component {
  constructor(props){
    super(props);

    this.state = {
      editModal: 'hidden'
    }
  }

  // componentWillMount (){
  //   this.props.loadTasks();
  // }

  nextStage(id) {
    console.log('triggering nextStage with id', id);
    this.props.setToNextStage(id);
  }

  previousStage(id) {
    console.log('triggering previous stage with id', id);
    this.props.setToPreviousStage(id);
  }

  deleteTask(id){
    this.props.deleteTask(id);
  }

  openEditForm(taskId) {
    // console.log('task of interest', taskId);
    console.log('openEditForm firing');
    this.setState({
      editTaskId: taskId
    });
  }

  closeEditForm(){
    this.setState({
      editTaskId: null
    })
  }

  onCardDrag(event, id){
    console.log('this is id', id);
    console.log('this is e', event);
    event.dataTransfer.setData("text", id);
  }

  onBoardDragOver(e){
    e.preventDefault();
  }

  onCardDrop(e, column){
    let data = e.dataTransfer.getData("text");
    console.log('this is data', data);
    this.props.moveToColumn(data, column);
  }


  render() {
    return (
      <div className="boardContainer" onDrop={(event)=>this.onCardDrop(event, this.props.title)} onDragOver={(event) => this.onBoardDragOver(event)}>
        {
          (this.state.editTaskId) ?
              <EditForm targetTaskId={this.state.editTaskId} closeEditForm={()=> this.closeEditForm()}/> : ''
        }
        <div className="boardTitle">{this.props.title}</div>
        <ul className="list">
          {this.props.cards
            .filter(card => {
              return card.status === this.props.filterBy || card.status === this.props.filterBy.toUpperCase();
            })
            .map(card => {
            return (
              <Card key={card.id} {...card} buttonText={this.props.buttonText} onPreviousButtonClick={() => this.previousStage(card.id)} onNextButtonClick={() => this.nextStage(card.id)} openEditForm={() => this.openEditForm(card.id)} onDeleteClick={() => this.deleteTask(card.id)} onCardDrag={(event)=>this.onCardDrag(event, card.id)} />
          )})}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loadTasks: () => {
    //   dispatch(loadTasks())
    // },
    moveToColumn: (id, column) => {
      dispatch(moveToColumnAction(id, column));
    },
    setToNextStage: (id) => {
      dispatch(nextStageAction(id));
    },
    setToPreviousStage: (id) => {
      dispatch(previousStageAction(id));
    },
    deleteTask: (id) => {
      dispatch(deleteTaskAction(id));
    }
  }
}

QueueBoard = connect(
  mapStateToProps,
  mapDispatchToProps
  )(QueueBoard);

export default QueueBoard;
