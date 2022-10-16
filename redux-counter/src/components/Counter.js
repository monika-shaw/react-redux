import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clear, decrement } from '../redux/actions';
import {increment} from '../redux/actions'

function Counter() {

    const counter = useSelector((state) =>
    state.counterReducer.count
    );

    const dispatch = useDispatch();

    const inc = () => {
        dispatch(increment(1));
    }

    const dec = () => {
        dispatch(decrement(1));
    }
    const cl = () => {
        dispatch(clear());
    }
  return (
    <>
    <h1>Counter App</h1>
    <h2>{counter}</h2>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    <button onClick={cl}>Clear</button>
    </>
  )
}

export default Counter