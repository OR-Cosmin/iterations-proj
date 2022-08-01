import React from "react";

const CloseButton = ({ closeBtn }) => {
  return (
    <button className="next--btn" onClick={closeBtn}>
      Close
    </button>
  );
};

export default CloseButton
