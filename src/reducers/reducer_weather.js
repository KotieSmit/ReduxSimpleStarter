
import { FETCH_WEATHER } from '../actions/index'

export default function (state  = [], action)
{
    console.log('Action type: :', action.type);
    switch(action.type){
    case FETCH_WEATHER:
        console.log('City:', state);    
        // return state.concat([state.payload.data]);    
        return  [action.payload.data, ...state]; 

    }
    console.log('Action received:', state);
    return state;
}