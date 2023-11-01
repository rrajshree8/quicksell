import React from "react";
import { BiTask } from "react-icons/bi";
import {GrRadialSelected} from 'react-icons/gr'
import {CgGoogleTasks} from 'react-icons/cg'




const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <BiTask/>
        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <GrRadialSelected />
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span><CgGoogleTasks style={{marginTop:'5px'}}/></span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
