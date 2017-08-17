import React from 'react';

const OpenAddForm = ({onPlusClick}) => {
  return (
    <button className="newTaskButton navElement" onClick={onPlusClick}>&#43;NEW TASK</button>
  );
}

export default OpenAddForm;
