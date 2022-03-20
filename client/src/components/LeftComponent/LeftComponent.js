import React from 'react';
import CommentCard from '../CommentCard/CommentCard'

export default function LeftComponent({ comments }) {

        return (
            <div className="LeftComponent">
                
                <div className="ScrollingList">
                <marquee direction="up" behavior="scroll">
                {comments.map(comment => {
                    return <CommentCard key={comment.id} comment={comment} />
                })}
                </marquee>
                </div>
            </div>
        );
    }