import React from 'react';

export default function CommentCard({ comment, user, setUser }) {

        return (
            <div className="CommentCard">
                <p>"{comment.content}"</p>
                <p>- {comment.user.first_name} | {comment.meetup.title} <br/></p>
               
            </div>
        );
    }