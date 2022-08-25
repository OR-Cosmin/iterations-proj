import React, { useState } from "react";
import { FaTimes, FaArrowCircleDown } from "react-icons/fa";

const ListAnswers = ({ choices, title, id, date, time, finished, deleteTitle,}) => {
  const [toggleList, setToggleList] = useState(false);
  const listAnswers = choices.map((id) => (  <span key={id}>{id}{choices[id]}</span>
  ));

  return (
    <table>
      <tbody>
      <tr>
        <th>Title</th>
        <th>Status</th>
        <th>Time</th>
        <th>Date</th>
      </tr>
      <tr>
        <td
          value={title}
          className="td--title"
          onClick={() => setToggleList((prev) => !prev)}
        >
          <span className="arrows">
            <FaArrowCircleDown
              className={toggleList ? "rotate--down" : "rotate--up"}
            />
          </span>
          <h3 className="td--title--h3">{title}</h3>
          <h4 className={toggleList ? "yes" : "no"}>{listAnswers}</h4>
        </td>
        <td><span  className = "span--status" style = {finished === true ? {background:"green"}:{background:"red"}}>{finished === true ? " " : " "}</span></td>
        <td>{time}</td>
        <td>{date}</td>
        <td style={{ background: "#f0a512" }}>
          {" "}
         
            <FaTimes
              style={{ color: "red", cursor: "pointer", width: "50px", height: "50px" }}
              onClick={() => deleteTitle(id)}
            />
        
        </td>
      </tr>
      </tbody>
    </table>
  );
};

export default ListAnswers;
