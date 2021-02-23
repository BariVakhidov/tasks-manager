import React from "react";
import s from './EditTask.module.css'

const Comment = ({comment, userName, createdAt}) => {
    return (
        <div className={s.comment}>
            <div className={s.commentHead}>
                <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt="" height={50}/>
                <div className={s.commentInfo}>
                    <span style={{fontSize:"16px", color:"black"}}>{userName}</span>
                  <span> прокомментировал {new Date(Date.parse(createdAt)).toLocaleDateString()}</span>
                </div>
            </div>
            <div className={s.commentText}>
                {comment}
            </div>
        </div>

    )
}
export default Comment;