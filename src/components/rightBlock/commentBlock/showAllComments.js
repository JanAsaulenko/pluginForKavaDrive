import React from 'react';
import {CommentInfo} from './showVoteParts/comment_infoBlock';
import './showAllComments.scss';
import logo from '../../../images/greenstar.png';


export const ShowVote = ({comments}) => {
    let list = comments.map((el) => {
        return <div className='commentBlock' key={el.id}>
            <div className='commentBlock_userName'>
                <img src={logo}/> <span className="commentBlock_userName_text">{el.login}</span>
            </div>
            <CommentInfo star={el.stars} user={el.login} comment={el.comment}/>
        </div>
    });
    return (
        <div>
            {list}
        </div>
    )
};