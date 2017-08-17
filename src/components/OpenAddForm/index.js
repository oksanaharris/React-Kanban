import React from 'react';

const OpenAddForm = ({onPlusClick}) => {
  return (
    <div className="newTaskButtonContainer">
      <button className="newTaskButton" onClick={onPlusClick}>&#43;</button>
    </div>
  );
}

export default OpenAddForm;
