const initialState={
    isOpen:false
};

export const openCreateCommentBlock = (state=initialState, action)=>{
    switch (action.type) {
        case"OPEN_CREATE_COMMENT_BLOCK":
            return{
                ...state, isOpen:!state.isOpen
            };

        default:
            return state
    }
}