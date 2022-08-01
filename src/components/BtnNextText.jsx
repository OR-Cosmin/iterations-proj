import React from "react";

const NextTextButton = ({ showTitle, text }) => {
  return (
    <button className="next--btn" disabled={text} onClick={showTitle}>
      Next
    </button>
  );
};

export default NextTextButton;
