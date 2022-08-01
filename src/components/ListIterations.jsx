import React from "react";
import ListAnswers from "./ListAnswers";

const ListIterations = ({ iterationList, deleteTitle }) => {
  return (
    <div>
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
