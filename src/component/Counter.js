import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement,zero } from '../redux/actions';

const Counter = () => {
    
const counter = useSelector((state) => state.counterReducer.count);
const dispatch = useDispatch();

const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const setZero = () => {
    dispatch(zero())
  }

    return (
        <div>
            <h1>Counter : {counter} </h1>
            <button className='btnStyle' onClick={()=>handleIncrement()}>+</button>
            <button className='btnStyle' onClick={()=>handleDecrement()}>-</button>
            <button className='btnStyle' onClick={()=>setZero()}>clear</button>
        </div>
    );
};

export default Counter;