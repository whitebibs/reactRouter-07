import React, {useState} from "react"
import {GithubUser} from "./GithubUser"
import {Link, Outlet } from "react-router-dom";

export function GithubUserList (){
    const [user, setUser] = useState([])
    const [value, setValue] = useState("");

  function handleSubmit () {
    setUser([...user,value ])
    setValue("")
  }
  return(
    <div>
      <form>
        <input value={value} onChange={(ele) => setValue(ele.target.value)}/>
        <button onClick={handleSubmit} >Add: </button>
        {user.map((username,index)=>
        (<GithubUser key={index} user={username}/>))}
        </form>
        {user.map((username) => (
        <div key={username}>
          <Link to={`/user/${username}`}>{username}</Link>
        </div>
      ))}
        <Outlet/>
    </div>
  )
  
}