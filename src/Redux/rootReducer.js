// import addItemAction from '../Action/addItemAction'
const initialState={
    count : 0,
    rhinocerebral :0,
    lung :0,
    gastrointestinal :0,
}

const rootReducer = (state=initialState,action) => {
 
        if (action.type<=5){
        // alert('hello')
            return{
            ...state,
            rhinocerebral :state.rhinocerebral +1,
            count:state.count+1
        }
    }
        else if(action.type<=9){
            return{
            ...state,
            lung:state.lung+1,
            count:state.count+1
        }
    }
        else if(action.type<=12){
            return{
            ...state,
            gastrointestinal :state.gastrointestinal +1,
            count:state.count+1
        }
    }
        else if(action.type === 'NO'){
            return{
            ...state,
            count:state.count+1
        }
    } 
        else if(action.type === 'SET_TO_INITIAL'){
            return{
            ...state,
            rhinocerebral:0,
            lung:0,
            gastrointestinal:0,
            count:0
        }
    }
        else
            return state
    }


export default rootReducer;