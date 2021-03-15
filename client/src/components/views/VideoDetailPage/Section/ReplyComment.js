import React, { useState, useEffect } from 'react'
import SingleComment from './SingleComment';

function ReplyComment(props) {


    const renderReplyComment = (parentCommentId) => 
        props.commentLists.map((comment, index) => (

            <React.Fragment>
                {
                    comment.responseTo === parentCommentId && 
                    <div>
                        <SingleComment refreshFunction={props.refreshFunction} comment={comment} postId={props.postId} key={index} />
                        <ReplyComment parentCommentId={comment._id} commentLists={props.commentLists}/>
                    </div>
                }
            </React.Fragment>
        ))
    
    

    return (
        <div>
            <p style={{ fontSize: '14px', margin: 0, color: 'gray' }}>
                View 0 more comment(s)
            </p>

            {renderReplyComment(props.parentCommentId)}

        </div>
    )
}

export default ReplyComment
