import React from 'react';

const Card = ({task, priority, createdBy, assignedTo, onButtonClick, buttonText, openEditForm}) => {
  return (
    <div className="cardContainer" onClick={openEditForm}>
      <h3 className="title">{task}</h3>
      <p>Priority: {priority}</p>
      <p>Created by: {createdBy}</p>
      <p>Assigned to: {assignedTo}</p>
      <button className="nextStageButton" onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
}

export default Card;
