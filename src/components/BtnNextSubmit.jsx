import React from "react";

const NextButton = ({ optionClicked, toggleCheckbox, count }) => {
  return (
    <button className="next--btn" disabled={toggleCheckbox} onClick={optionClicked}>
      {count === 2 ? "Submit" : "Next"}
    </button>
  );
};

export default NextButton;
