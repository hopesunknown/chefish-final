import React from 'react';

export default function CommentCard({ comment }) {

        return (
            <div className="CommentCard">
                <p style={{textAlign: "left"}}>"{comment.content}"</p>
                <p style={{fontStyle: "italic", textAlign: "center"}}>- {comment.user.first_name} | {comment.meetup.title} <br/></p>
               
            </div>
        );
    }