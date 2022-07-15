import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import Login from './pages/login/Login';
import Card from "./components/card/Card"
import { posts } from './data';
import { io } from 'socket.io-client';
import Notification from './components/notification/Notification';


function App() {

  const [username,setUsername] = useState(null)
  const [socket,setSocket] = useState(null)
  const  [notificate,setNotificate] = useState([])
  const [page,setPage] = useState("home")

  useEffect(()=>{
    setSocket(io("http://localhost:8800"))
  },[])

  useEffect(()=>{
    socket?.emit("newUser",username)
  },[username])

  useEffect(()=>{
    socket?.on("reciveLike",({ senderName })=>{
      setNotificate([{
        senderName:senderName,
        type:"liked",
        vue: false
      },...notificate])
    })
  },[notificate,socket])

  const handleVue = () => {
    setNotificate(notificate.map(n=>{
      n.vue=true
      return n
    }))
  }

  return (
    <div className="app">
      { !username ? <Login setUsername={setUsername} />: 
      <>
        <Nav notificate={notificate} setPage={ setPage } />
        <span className="user">{ username }</span>
        { page==="home" ? posts.map(p=>{
          return <Card key={p.id} post={p} socket={socket} username={username} />
        }) : /* page==="notification" ? */ (
        <>
          <button className="vue" onClick={handleVue}>mark comme vue</button>
          { notificate.map(n=>{
            return <Notification notificate={ n } />
          }) }
        </>) 
        }
      </>}
    </div>
  );
}

export default App;
