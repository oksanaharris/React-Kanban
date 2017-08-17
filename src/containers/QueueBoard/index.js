import React, { Component } from 'react';
import {connect} from 'react-redux';
import {nextStageAction} from '../../actions';
import Card from '../../components/Card';
import EditForm from '../EditForm';


class QueueBoard extends Component {
  constructor(props){
    super(props);

    this.state = {
      editModal: 'hidden'
    }
  }

  nextStage(id) {
    this.props.setToNextStage(id);
  }

  openEditForm(taskId) {
    console.log('task of interest', taskId);
    this.setState({
      editModal: 'visible',
      editTaskId: taskId
    });
  }

  closeEditForm(){
    this.setState({
      editModal: 'hidden'
    })
  }


  render() {
    return (
      <div className="boardContainer">
        {
          (this.state.editTaskId) ?
              <EditForm shown={this.state.editModal} targetTaskId={this.state.editTaskId} closeEditForm={()=> this.closeEditForm()}/> : ''
        }
        <div className="boardTitle">{this.props.title}</div>
        <ul className="list">
          {this.props.cards
            .filter(card => {
              return card.status === this.props.filterBy;
            })
            .map(card => {
            return (
              <Card key={card.id} {...card} buttonText={this.props.buttonText} onButtonClick={() => this.nextStage(card.id)} openEditForm={() => this.openEditForm(card.id)} />
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
    setToNextStage: (id) => {
      dispatch(nextStageAction(id));
    }
  }
}

QueueBoard = connect(
  mapStateToProps,
  mapDispatchToProps
  )(QueueBoard);

export default QueueBoard;
