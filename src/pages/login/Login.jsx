import { useRef } from "react";
import "./login.css"

export default function Login({setUsername} ) {

  const inpt = useRef()

  return (
    <div className='login'>
      <input className="username" placeholder=' username ' ref={inpt} />
      <button className="sub" onClick={()=>{ setUsername(inpt.current.value) } }>Login</button>
    </div>
  )
}
