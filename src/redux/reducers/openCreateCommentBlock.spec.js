import {openCreateCommentBlock} from './openCreateCommentBlock' ;
import {mockStarData} from './mockStardata';
describe('reducers',()=>{
    it('should open  commentBlock window',()=>{
        const action = {
            type:'OPEN_CREATE_COMMENT_BLOCK'
        };
        let state={
            isOpen:false
        };
        expect(openCreateCommentBlock(state, action)).toEqual({isOpen:true})
    })
    it('return information about stars',  ()=>{
        let state={
            call:'niggaz'
        }
        expect(mockStarData(state)).toEqual({call:'niggaz'})
    })
})