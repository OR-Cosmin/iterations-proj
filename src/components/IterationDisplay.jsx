import React from "react";
import ListIterations from "./ListIterations";

const IterationDisplay = ({ iterationList, deleteTitle }) => {
  return (
    <div className="display--show">
      <p className="iterations--counter">
        You currently have {iterationList.length}{" "}
        {iterationList.length > 1 ? "iterations" : "iteration"}
      </p>
      <ListIterations iterationList={iterationList} deleteTitle={deleteTitle} />{" "}
    </div>
  );
};

export default IterationDisplay;
