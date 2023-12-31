import React, { useEffect, useState } from "react";
import { GoSingleSelect } from "react-icons/go"; 


import { useDispatch, useSelector } from "react-redux";
import { dataSelect } from "../actions/action";

const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

const Navbar = () => {
  const [slider, setSlider] = useState(false);
  const dispatch = useDispatch();
  const { tickets, users } = useSelector((state) => state.dataSlice);
  const [groups, setGroups] = useState(getGroup());
  const [order, setOrder] = useState(getOrder());

  const handleGroups = (e, value) => {
    if (value) {
      setGroups(e.target.value);
      setSlider(!setSlider);
      localStorage.setItem("group", e.target.value);
    } else {
      setOrder(e.target.value);
      setSlider(!setSlider);
      localStorage.setItem("order", e.target.value);
    }
  };

  useEffect(() => {
    if (groups === "user") {
      dispatch(
        dataSelect(
          groups,
          {
            tickets,
            users,
          },
          order
        )
      );
    } else {
      dispatch(dataSelect(groups, tickets, order));
    }
  }, [tickets, dispatch, groups, users, order]);

  return (
    <div className="navbar" style={{display:'flex',justifyContent:'space-between'}}>
      <div className="navbarButton">
        <button className="groupButton" onClick={() => setSlider(!slider)}>
           Display <GoSingleSelect style={{marginTop:'5px'}} />
        </button>

        {slider && (
          <>
            <div className="dropDown">
              <div className="group">
                <span style={{ color: "grey" }}>Grouping</span>
                <select
                  value={groups}
                  onChange={(e) => handleGroups(e, true)}
                  name="group"
                  id="group"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>

              <div className="group">
                <span style={{ color: "grey" }}>Ordering</span>
                <select
                  value={order}
                  onChange={(e) => handleGroups(e, false)}
                  name="order"
                  id="order"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>

     
    </div>
  );
};

export default Navbar;
