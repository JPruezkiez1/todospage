import React from 'react';
import './TodoItem.css';
import {COMPLETEICON} from './completeicon'; // Import the CompleteIcon component
import {DELETEICON} from './deleteicon'; // Import the DeleteIcon component

function TodoItem(props) {
  const handleToggleComplete = () => {
    props.onToggleComplete(props.text);
  };

  const handleDelete = () => {
    props.onDelete(props.text);
  };

  return (
    <li className="TodoItem">
      <COMPLETEICON
         className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
         onClick={handleToggleComplete}
      />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DELETEICON className="Icon Icon-delete" onClick={handleDelete} />
    </li>
  );
}

export { TodoItem };