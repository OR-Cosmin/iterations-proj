import React from "react";

const Questions = ({ handleCheckboxValues, count, questions }) => {
  return (
    <div className = "questions--container">
      <h3 className="question-text">{questions[count].title}</h3>
      {questions[count].answers.map((answer) => {
        return (
          <div key={answer.id}>
            <input
              className={"first" + count + "name" + answer.id}
              type="checkbox"
              value={answer.text}
              onChange={handleCheckboxValues}
            />
            <label htmlFor="check--input">{answer.text}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
