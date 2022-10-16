import { INCREMENT,DECREMENT, CLEAR } from "../actions/types";

const initialstate = {
    count:0,
}

export const counterReducer =(state = initialstate,action) =>{

    switch(action.type)
    {
        case INCREMENT:
            return{
                ...state,
                count:state.count+action.change
            };

            case DECREMENT:
                return{
                    ...state,
                    count:state.count-action.change
                };
                case CLEAR:
                    return{
                        ...state,
                        count:0
                    };
                default:
                    return state;
    };
};