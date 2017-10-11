import React from 'react';

const Card = ({task, priority, createdBy, assignedTo, onNextButtonClick, onPreviousButtonClick, onDeleteClick, buttonText, openEditForm, onCardDrag}) => {
  return (
    <div className={"cardContainer " + priority} onDoubleClick={openEditForm} draggable="true" onDragStart={onCardDrag}>
      <h3 className="cardTitle">{task}</h3>
      <p className="cardDetails">Priority: {priority.toUpperCase()}</p>
      <p className="cardDetails">Created by: {createdBy}</p>
      <p className="cardDetails">Assigned to: {assignedTo}</p>
      <div className="cardButtonContainer">
        <div className="cardButton leftArrowButton" onClick={onPreviousButtonClick}>
          <img className="leftArrowImage" src="./play-arrow.svg" />
        </div>
        <div className="cardButton deleteButton" onClick={onDeleteClick}>
          <img className="trashCanImage" src="./waste-bin.svg" />
        </div>
        <div className="cardButton rightArrowButton" onClick={onNextButtonClick}>
          <img className="rightArrowImage" src="./play-arrow.svg" />
        </div>
      </div>
    </div>
  );
}

export default Card;

// credit for arrow
// <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

//credit for trashcan
//<div>Icons made by <a href="https://www.flaticon.com/authors/egor-rumyantsev" title="Egor Rumyantsev">Egor Rumyantsev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>