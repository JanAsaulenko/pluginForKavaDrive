export const pushCommentsIntoStore = (state=[], action)=>{
    switch (action.type){
        case "PUSH_COMMENTS_INTO_STORE":{
            return [...state,action.payload]
        }
        default: return state
    }
}