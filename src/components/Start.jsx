import React, { useState } from "react";
import IterationDisplay from "./IterationDisplay";
import Form from "./Form";

// Start receives the inputs from the checkboxes and assigns them a random id
const Start = () => {
const [toggleIterationView, setToggleIterationView] = useState(true);
const [iterationList, setIterationList] = useState([]);

const addId = (id) => {
    const randomId = Math.floor(Math.random() * 10000) + 1;
    const newTest = { randomId, ...id };
    setIterationList([...iterationList, newTest]);
  };

  const deleteTitle = (randomId) => {
    setIterationList(iterationList.filter((id) => id.randomId !== randomId));
  };

  return (
    <div className="main--wrapper">
      {toggleIterationView && (
        <div className="show--first">
          <IterationDisplay iterationList={iterationList} deleteTitle={deleteTitle} />
        </div>
      )}

      <Form addId={addId} setToggleIterationView={setToggleIterationView} />
    </div>
  );
};

export default Start;
