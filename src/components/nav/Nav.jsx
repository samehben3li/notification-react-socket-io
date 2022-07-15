import { useEffect, useState } from "react"
import "./nav.css"

export default function Nav({ notificate,setPage }) {

  const [nbNotification,setNbNotification] = useState(0)

  useEffect(()=>{
    setNbNotification(notificate.filter(n=>n.vue==false).length)
  },[notificate])

  return (
    <div className="nav">
        <span className="logo" onClick={()=> setPage("home") } >TINDO</span>
        <div className="icons">
          <div className="icon" onClick={()=> setPage("notification") } >
            <i className="fas fa-bell img"></i>
            { nbNotification>0 && <span className="count">{ nbNotification }</span> }
          </div>
          <div className="icon">
            <i className="fas fa-envelope img"></i>
            <span className="count">2</span>
          </div>
          <div className="icon">
            <i className="fas fa-cog img"></i>
            <span className="count">2</span>
          </div>
        </div>
    </div>
    )
}
