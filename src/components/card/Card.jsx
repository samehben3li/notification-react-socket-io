import { useState } from "react";
import "./card.css"

export default function Card({ post,socket,username }) {

  const [liked ,setLiked] = useState(false)

  const handleLike = ()=>{
    setLiked(true)
    /* socket?.emit("sendNotification",{
      sender:username,
      recivier:post.username
    }) */
    socket.emit("sendLike",{
      senderName:username,
      recieverName:post.username,
    })
  }

  return (
    <div className="card">
      <div className="info">
        <img src={post.userImg} className="userImg" alt="" />
        <span className="fullname">{ post.fullname }</span>
      </div>
      <img src={ post.postImg } alt="" className="postImg" />
      <div className="interaction">
        {/* <i class={ liked ? "fas fa-heart emote" : "far fa-heart emote"  }onClick={handleLike}></i>
        <i class="far fa-comment emote"></i>
        <i class="fas fa-share emote"></i>
        <i class="fas fa-info-circle emote"></i> */}
        <img src={ liked ? "/assets/heart.png" : "/assets/like.png" } alt="" 
        className="emote like"
        onClick={handleLike} />
      </div>
    </div>);
}
