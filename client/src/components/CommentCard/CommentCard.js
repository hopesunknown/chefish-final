import React from 'react';

export default function CommentCard({ comment }) {

        return (
            <div className="CommentCard">
                <p>"{comment.content}"</p>
                <p>- {comment.user.first_name} | {comment.meetup.title} <br/></p>
               
            </div>
        );
    }