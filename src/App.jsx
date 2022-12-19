import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [user,setUser] = useState({name:'', avatar:''});

  useEffect(()=>{
      fetch("https://api.github.com/users/1felipeaac")
      .then(response => response.json())
      .then(data => {
        setUser({
          avatar: data.avatar_url,
          name: data.name,
        })

      })
      .catch(e => console.error(e))
  },[])

  return (
    <div className="App">
      <img src={user.avatar} alt="" />
      <strong>{user.name}</strong>
    </div>
  )
}

export default App
