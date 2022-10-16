import { INCREMENT,DECREMENT, CLEAR } from "./types";

export  const increment = (number) => {
    return{
        type:INCREMENT,
        change:number
    };
};

export const decrement = (number) => {
    return{
        type:DECREMENT,
        change:number
    };
};
export const clear = (number) => {
    return{
        type:CLEAR,
        change:number
    };
};