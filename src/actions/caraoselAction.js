import { CARAUSEL_LOAD_LIST } from "../constants/carauselConstants"

export const createList=()=>async(dispatch,getState)=>{
    const res= await fetch('https://backend.dokanbhai.dokanbhai.com:3002/api/add/category')
    const data=await res.json()

    if(data?.length)
    {
        dispatch({type:CARAUSEL_LOAD_LIST,payload:data})
    }
    
}