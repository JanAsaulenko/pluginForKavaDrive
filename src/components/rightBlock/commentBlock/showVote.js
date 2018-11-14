import React from 'react';
import {CommentInfo} from './showVoteParts/comment_infoBlock';
import  './showVote.scss';
export const ShowVote = ({comments}) => {
    console.log(comments);
    let list = comments.map((el,index)=> {
        return <div className='commentBlock' key={el.id}>
            /*TODO STOPED HERE*/
            <div className='commentBlock_userName'>

                {el.login}
            </div>
            <div>
                <CommentInfo star={el.stars} comment={el.comment}/>
            </div>
        </div>

    });


  return(
      <div>
      {list}
      </div>
  )
};