import { CARAUSEL_LOAD_LIST } from "../constants/carauselConstants";


const initialState={
    list:[]
};

const carauselReducer=(state=initialState,actions)=>{
    
    switch(actions.type){
        case CARAUSEL_LOAD_LIST:

        return{
            ...state,
            list:actions.payload,
        }

        default:
            return state;


       
    }

    
    
}

export default carauselReducer