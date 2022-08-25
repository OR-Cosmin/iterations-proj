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
      <div className="wahrFalsch--Counter" style = {iterationList.length > 0 ? {display:"block"}:{display:"none"}}>
      <div className="wahrFalsch--Counter--Wahr" style = {countTrue > 0 ? {display:"block"}:{display:"none"}}><span className="span--weight">Finished</span><p className="wahr--Counter">{countTrue}</p></div>
      <div className="wahrFalsch--Counter--Falsch" style = {countFalse > 0 ? {display:"block"}:{display:"none"}}><span className="span--weight">Not-Finished</span><p className="falsch--Counter">{countFalse}</p></div>
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
