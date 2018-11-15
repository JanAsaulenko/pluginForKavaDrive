const initialState = {
    isOpen:false
}

export const openShowCommentsBlock = (state=initialState, action)=>{
    switch(action.type) {
        case 'OPEN_SHOW_COMMENTS_BLOCK':
            return {...state, isOpen:!state.isOpen};
        default: return state
    }
}