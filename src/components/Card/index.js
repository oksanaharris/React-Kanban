import React from 'react';

const Card = ({task, priority, createdBy, assignedTo, onButtonClick, onDeleteClick, buttonText, openEditForm}) => {
  return (
    <div className="cardContainer" onDoubleClick={openEditForm}>
      <h3 className="cardTitle">{task}</h3>
      <p className="cardDetails">Priority: {priority}</p>
      <p className="cardDetails">Created by: {createdBy}</p>
      <p className="cardDetails">Assigned to: {assignedTo}</p>
      <div className="cardButtonContainer">
        <button className="cardButton nextStageButton" onClick={onButtonClick}>{buttonText}</button>
        <button className="cardButton deleteButton" onClick={onDeleteClick}>DELETE</button>
      </div>
    </div>
  );
}

export default Card;
