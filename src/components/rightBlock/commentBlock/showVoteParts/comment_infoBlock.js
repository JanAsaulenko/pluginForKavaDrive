import React from 'react';
import './comment_infoBlock.scss';
import  {Comments} from './commentInfoBlock_components/Comments';
import CommentStars from "./commentInfoBlock_components/commentInfoBLockStars";
export const CommentInfo = ({star, comment, user}) => {

return (
   <div className='commentBlock_ratingPart'>
       <Comments comments ={comment} user={user}/>
       <CommentStars stars={star} />
   </div>
)
};