import { useEffect, useState } from "react"
import { posts } from "../../data"
import "./notification.css"

export default function Notification({ notificate }) {

    const [user,setUser] = useState({})

    useEffect(()=>{
        setUser(posts.find(p=>p.username===notificate.senderName))
    },[notificate])

    return (
        <>
            
            <div className={!notificate.vue ? "notification novue" : "notification" } >
                <img
                    src={ user.userImg }
                    alt="" className="nuserImg" />
                <div className="deatils">
                    <span className="text"><b>{ user.fullname }</b> has { notificate.type } your post</span>
                    <span className="time">1 hour ago</span>
                </div>
            </div>
        </>
    )

}
