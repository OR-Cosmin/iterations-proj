import React from "react";
import ListAnswers from "./ListAnswers";

const ListIterations = ({ iterationList, deleteTitle }) => {


  const iterationsValidatorTrue = iterationList.filter(
    (item) => item.finished === true
  );
  const iterationsValidatorFalse = iterationList.filter(
    (item) => item.finished === false
  );
  const countTrue = iterationsValidatorTrue.length;
  const countFalse = iterationsValidatorFalse.length;

  return (
    <div>
      <div className="wahrFalsch--Counter" style = {iterationList.length > 0 ? {display:"flex"}:{display:"none"}}>
        <p className="wahr--Counter" style = {countTrue > 0 ? {display:"inline-flex"}:{display:"none"}}>{countTrue}</p>
        <p className="falsch--Counter" style = {countFalse > 0 ? {display:"inline-flex"}:{display:"none"}}>{countFalse}</p>
      </div>
        {iterationList.map((mapDisplay) => {
        return (
          <div className="listItems--container" key={mapDisplay.randomId}>
            <div
              className="listItems--container--ListAnswers"
              key={mapDisplay.randomId}
            >
              <ListAnswers
                date={mapDisplay.sum.date}
                time={mapDisplay.sum.time}
                title={mapDisplay.sum.iteration}
                choices={mapDisplay.sum.choices}
                id={mapDisplay.randomId}
                finished={mapDisplay.finished}
                deleteTitle={deleteTitle}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListIterations;
