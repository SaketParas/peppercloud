const ADD_COMMENTS = 'ADD_COMMENTS';

const company_data = (action_data) => {
    console.log(action_data)
    return{
        type: ADD_COMMENTS,
          all :action_data 
        }
}
export {company_data}