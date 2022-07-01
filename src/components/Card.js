import axios from "axios";
import React, { useState } from 'react';
import "./Card.css";
import PropTypes from 'prop-types';

const Card=({id, message, likeCount, deleteCard}) => {
    const increaseLikeCt = () => {
        updateLike(id);
    }
}

const Task = (props) => {
  const id = props.id;
  const title = props.title;
  const isComplete = props.isComplete;
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';
  const updateMakeComplete = props.updateMakeComplete;
  const updateDeletedTask = props.updateDeletedTask;

  console.log(props);
  const makeComplete = () => {
    updateMakeComplete(id);
  };

  const deleteTask = () => {
    updateDeletedTask(id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => makeComplete()}
      >
        {title}
      </button>

      <button
        className="tasks__item__remove button"
        data-testid={`delete button ${id}`}
        onClick={() => deleteTask()}
      >
        x
      </button>
    </li>
  );
