import React from "react";

const TextInput = ({ text, saveTitle }) => {
  return (
    <input
      type="text"
      placeholder="Add Title"
      value={text}
      onChange={saveTitle}
      maxLength = "15"
    />
  );
};

export default TextInput