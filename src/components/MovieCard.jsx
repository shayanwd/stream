import React from 'react'
import { useState, useEffect } from 'react';

const MovieCard = ({ CardImg, CardText, buttonLabel, disabledBtn,onSelected,selected }) => {
  const [isChecked, setIsChecked] = useState(false);

  // Load the initial state from local storage
  useEffect(() => {
    const storedValue = localStorage.getItem(buttonLabel);
    if (storedValue !== null) {
      setIsChecked(JSON.parse(storedValue));
    }
  }, [buttonLabel]);

  // Handle checkbox change
  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    // if (onSelected) onSelected(CardText,newCheckedState);
    // Store the updated state in local storage
    localStorage.setItem(buttonLabel, JSON.stringify(newCheckedState));
  };


  useEffect(() => {
    if (onSelected) onSelected(CardText,isChecked);

  }, [isChecked]);

  return (
    <div className="movie-card-btn" >
      <img src={CardImg} />
      <input
        type='checkbox'
        name={CardText}
        value={buttonLabel}
        checked={selected}
        onChange={handleCheckboxChange}

        className={`${disabledBtn?'disabled': ''}`}

      />
      <span className={`${disabledBtn?'disabled': ''}`}>
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 3.5L3.5 6L8 1" stroke="white" />
        </svg>

      </span>
      <h4>{CardText}</h4>

    </div>
  )
}

export default MovieCard
