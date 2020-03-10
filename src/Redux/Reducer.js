const ADD_COMMENTS = "ADD_COMMENTS";

const initiState = {
    stored_data : [],
}
const stored_data = (state=initiState , action) => {
    
    switch(action.type){

        case ADD_COMMENTS :
            console.log(state,action)
            return{
                ...state,
                stored_data: [...state.stored_data, action.all]
            }

            default:
            return state
    }
}
export default stored_data