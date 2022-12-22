import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'

import './style.css'

function Home() {

  const [user,setUser] = useState({name:'', avatar:'', following:'', followers: '', repos:'',company: '', location:''});

    useEffect(()=>{
      async function fetchData(){
        const response = await fetch("https://api.github.com/users/1felipeaac");
        const data = await response.json()
          setUser({
            avatar: data.avatar_url,
            name: data.name,
            following: data.following,
            followers: data.followers,
            repos: data.public_repos,
            company: data.company,
            location: data.location
          });
        }
      fetchData();
    },[]);

  return(
    <Card
      name={user.name}
      avatar={user.avatar}
      followers={user.followers}
      following={user.following}
      repos={user.repos}
      company={user.company}
      location={user.location}
    />
  )
}

export default Home


