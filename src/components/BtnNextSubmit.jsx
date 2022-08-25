import React from "react";

const NextButton = ({ optionClicked, count, numb }) => {
 


  return (
    <button className="next--btn" disabled={numb === 0 ? true : false} onClick={optionClicked}>
      {count === 2 ? "Submit" : "Next"}
    </button>
  );
};

export default NextButton;
