import React from 'react'
import CommentBlock from "./commentBlock/controlButtons";
import {ShowOnMap} from './showOnMap/showOnMap';
import './rightBlock.scss';
export const RightBlock = ({commentForm, showComments}) => {
   function pushComments(event){
       commentForm(event)
    }
    function ListOpen(event){
       showComments(event)
    }
return (
    <div className='wrapper_right-block'>
        <ShowOnMap/>
        <CommentBlock form={pushComments} list={ListOpen}/>
    </div>
)
};