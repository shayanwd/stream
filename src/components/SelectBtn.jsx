import React, { useState, useEffect } from "react";

const SelectBtn = ({ buttonLabel, type, onSelected, selectedLable }) => {
  const [isChecked, setIsChecked] = useState(false);

  // Load the initial state from local storage
  useEffect(() => {
    // const storedValue = localStorage.getItem(buttonLabel);
    // if (storedValue !== null) {
    //   setIsChecked(JSON.parse(storedValue));
    //   if (onSelected) onSelected(buttonLabel);
    // }
  }, [buttonLabel]);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    // alert(checked)
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onSelected) onSelected(buttonLabel,newCheckedState);

    // // Store the updated state in local storage
    localStorage.setItem(buttonLabel, JSON.stringify(newCheckedState));
  };
  return (
    <div className="select-btn">
      <input
        type={type ? "radio" : "checkbox"}
        name={type ? "show" : buttonLabel}
        value={buttonLabel}
        checked={selectedLable}
        onChange={handleCheckboxChange}
      />
      <span>{buttonLabel ? buttonLabel : "Select"}</span>
    </div>
  );
};

export default SelectBtn;
