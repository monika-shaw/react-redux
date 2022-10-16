import React, { Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions";

const containerStyle = {
  display: "flex",
};
const buttonStyle = {
  fontSize: "1.5rem",
  width: "40px",
  height: "40px",
};

export const Counter = () => {
  
const counter = useSelector((state)=> state.counterReducer.count);
const dispatch = useDispatch();

const inc = () => {
  dispatch(increment(1));
}

const dec = () => {
  dispatch(decrement(1));
}

return (
    <div className="App">
      <header className="App-header">
        <h1>{counter}</h1>
        <div style={containerStyle}>
          <button type="button" style={buttonStyle} onClick={dec}>
            -
          </button>
          <button type="button" style={buttonStyle} onClick={inc}>
            +
          </button>
        </div>
      </header>
    </div>
  );
};

export default Counter;
