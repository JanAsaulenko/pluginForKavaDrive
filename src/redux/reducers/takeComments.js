export function takeComments (state=[], action) {
    switch (action.type){
        case'UPLOAD_COMMENTS':{
            return (
                [...state, action.payload]
            )
        }
        default: {
            return state
        }}
}