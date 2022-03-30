import React, { useState } from 'react'

export default function EditComment({ user, id, comment, handleUpdatedComment, edit, setEdit }) {
    const [updatedComment, setUpdatedComment] = useState(comment.content)

    function handleCommentChange(e) {
        setUpdatedComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch(`/comments/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: user.id,
            content: updatedComment
          }),
        })
          .then((r) => r.json())
          .then((updatedComment) => handleUpdatedComment(updatedComment))
          .then(() => setEdit(false));
      }

      console.log(comment)
  return (
    <div>
        <form className="edit-comment-form" onSubmit={handleSubmit}>
            <label className="edit-form-label" htmlFor="edit-comment">
                Edit Comment:
            </label>
            <input 
                className="edit-comment-input"
                type="text"
                placeholder={comment.content}
                value={updatedComment}
                onChange={handleCommentChange}
            ></input>
            <button className="save-button" type="submit" value="Save">Save</button>
        </form>
    </div>
  )
}
