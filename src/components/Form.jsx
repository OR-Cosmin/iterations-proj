import React, { useState } from "react";
import BtnStart from "./BtnStart";
import BtnClose from "./BtnClose";
import BtnNextSubmit from "./BtnNextSubmit";
import BtnNextText from "./BtnNextText";
import TextInput from "./TextInput";
import Questions from "./Questions";

const Inputs = ({ addId, setToggleIterationView }) => {
  const questions = [
    {
      title: "Choose your preferred beverage",
      answers: [
        { id: 0, text: "Wine" },
        { id: 1, text: "Beer" },
        { id: 2, text: "Juice" },
      ],
    },
    {
      title: "Choose your preferred color",
      answers: [
        { id: 3, text: "Blue" },
        { id: 4, text: "Red" },
        { id: 5, text: "Green" },
      ],
    },
    {
      title: "Choose your preferred mode of transportation",
      answers: [
        { id: 6, text: "Train" },
        { id: 7, text: "Plane" },
        { id: 8, text: "Car" },
      ],
    },
  ];

  //New Date
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const time = `${current.getHours()}:${current.getMinutes()}`;
  const [timeI, setTimeI] = useState("");
  const [dateI, setDateI] = useState("");

  //BtnNextText
  const [showInputTitle, setShowInputTitle] = useState(true);
  const [showInputQuestions, setShowInputQuestions] = useState(false);
  const [showStartBtn, setShowStartBtn] = useState(true);

  //Title & Checkbox 
  const [titleInput, setTitleInput] = useState([]); 
  const [checkboxValues, setCheckboxValues] = useState([]); 
  
  //Toggle iteration & questions
  const [startIteration, setStartIteration] = useState(false);
  const [text, setText] = useState("");


  //Complete iteration arr
  const completeIterationArr = {
    time: [timeI],
    date: [dateI],
    iteration: [...titleInput],
    choices: [...checkboxValues],
  };

  const showBtn = {
    display: showInputTitle === false ? "none" : " ",
  };
 

  const showTitle = (e) => {
    e.preventDefault();
    setShowInputTitle(false);
    setShowInputQuestions(true);
    setShowStartBtn(false);
    setToggleIterationView((current) => !current);
    setTitleInput((prevState) => {
      return [...prevState, text];
    });
    setDateI(date);
    setTimeI(time);
  };

  const saveTitle = (e) => {
    setText(e.target.value);
  };

//Disable

 const [ numb , setNumb] = useState(0)
  const handleCheckboxValues = (e) => {
    const { value, checked } = e.target;
  
    checked === true
      ? setCheckboxValues((prevState) => {
          return [...prevState, value];
        })
      : setCheckboxValues(checkboxValues.filter((e) => e !== value));  

      checked === true ? setNumb(numb + 1) : setNumb(numb - 1)
  };

 
 

console.log(numb,"numb")
//console.log(toggleCheckbox,"tgl")



 //BtnStart
  const nextIteration = (e) => {
    e.preventDefault();
    setStartIteration((current) => !current);
    setText("");
    setCheckboxValues([]);
    setTitleInput([]);
  };

  //BtnNextSubmit
  const [count, setCount] = useState(0);
  const optionClicked = (e) => {
    e.preventDefault();
    if (count + 1 < questions.length) {
      setCount(count + 1); //by increasing the count you change the questions
      setNumb(0)
    } else {
      setCount(0); //set the count back to 0 for new iterations after submit button is clicked
      setShowInputTitle(true);
      setStartIteration(false);
      setShowInputQuestions(false);
      setShowStartBtn(true);
      setToggleIterationView((current) => !current);
      addId({ finished: true, sum: completeIterationArr }); //adds responses to first page (set status of iteration to true if all questions have been answered)
      setNumb(0)
    }
  };
  //BtnClose
  const closeBtn = (e) => {
    e.preventDefault();
    setShowInputQuestions(false);
    setStartIteration(false);
    setShowStartBtn(true);
    setShowInputTitle(true);
    setCount(0);
    setCheckboxValues([]);
    setTitleInput([]);
    setText("");
    addId({ finished: false, sum: completeIterationArr });
    setToggleIterationView((current) => !current);
  };


  return (
    <div>
      <div className="start--btn--input">
        {showStartBtn && (
          <BtnStart
            startIteration={nextIteration}
            text={startIteration ? "Close Iteration" : "Start Iteration"}
          />
        )}
      </div>
      {startIteration && (
        <div>
          <div className="interationTitle--input" style={showBtn}>
            <TextInput saveTitle={saveTitle} text={text} />
            <BtnNextText showTitle={showTitle} text={!text} />
          </div>

          {showInputQuestions && (
            <div className="questions--btns--container">
              <Questions
                handleCheckboxValues={handleCheckboxValues}
                count={count}
                questions={questions}
              />
              <div className="form--btns">
              <BtnNextSubmit
                  optionClicked={optionClicked}
                  numb = {numb}
                  count={count}
                />
                <BtnClose closeBtn={closeBtn} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Inputs;
