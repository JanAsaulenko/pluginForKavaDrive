import React from 'react'
import './comments.scss'
export const Comments = ({user, comments}) => {
    return<div className='comments'>
        <div className='comments_field'><span className='comments_field-label'>User:</span> {user}</div>
        {comments}
    </div>
};