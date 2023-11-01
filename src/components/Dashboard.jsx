import React from "react";
import { useSelector } from "react-redux";
import { BsFillPersonFill, BsPlusLg } from "react-icons/bs"; 
import { GrStatusGoodSmall } from "react-icons/gr"; 
import { HiSelector } from "react-icons/hi"; 



import Card from "../components/Card";

const Dashboard = () => {
  const { dataSelected, user } = useSelector((state) => state.dataSelectSlice);

  return (
    dataSelected && (
      <div className="container" style={{ justifyContent: "space-evenly" }}>
        {dataSelected.map((element, index) => {
          return (
            <>
              <div
                key={index}
                className="dashboard"
            
              >
                <div className="cardHeading1">
                  <div
                    className="sideView1"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {!user ? (
                      <HiSelector style={{marginRight:"20px"}}/> 
                    ) : (
                      <>
                        <div className="image" style={{marginTop:'10px'}}>
                        <BsFillPersonFill /> 
                        </div>
                      </>
                    )}
                    <span > 
                      {element[index]?.title}
                    </span>
                    
                    <span style={{color:'blue',marginLeft:'10px',}}>{element[index]?.value?.length}</span>
                  </div>
                  <div className="sideView2">
                    <BsPlusLg style={{marginRight:'10px'}}/>
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="selectList">
                  {element[index]?.value?.map((element, ind) => {
                    return (
                      <Card
                        id={element.id}
                        title={element.title}
                        tags={element.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default Dashboard;
