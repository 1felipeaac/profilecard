import { useEffect, useState } from 'react'
import './style.css'
import img_followers from '../../assets/followers.svg'
import img_following from '../../assets/followers.svg'
import img_company from '../../assets/company.svg'
import img_location from '../../assets/location.svg'
import img_repository from '../../assets/repository.svg'
import img_logo from '../../assets/logo.svg'

function Card(){
    const [user,setUser] = useState({name:'', avatar:'', following:'', followers: '', repos:'',company: '', location:''});

    useEffect(()=>{
        fetch("https://api.github.com/users/1felipeaac")
        .then(response => response.json())
        .then(data => {
          setUser({
            avatar: data.avatar_url,
            name: data.name,
            following: data.following,
            followers: data.followers,
            repos: data.public_repos,
            company: data.company,
            location: data.location
          })
  
        })
        .catch(e => console.error(e))
    },[])
  
    return (
      <div className="card">
        <main>
          <section>
            <img id='logo' src={img_logo} alt="" />
            <strong>{user.name}</strong>
          </section>
          <img id='avatar' src={user.avatar} alt="" />
          <ul>
            <li>
              <img src={img_followers} alt="" />
              <p>{user.followers}</p>
              followers
            </li>
            <li>
              <img src={img_following} alt="" />
              <p>{user.following}</p>
              following
            </li>
            <li>
              <img src={img_repository} alt="" />
              <p>{user.repos}</p>
              repositórios
            </li>
            <li>
              <img src={img_company} alt="" />
              <p>{user.company}</p>
            </li>
            <li>
              <img src={img_location} alt="" />
              <p>{user.location}</p>
            </li>
          </ul>
        </main>
        <aside>
          <h1>Customizar RocketCard</h1>
          <button>Gerar Background</button>
        </aside>
      </div>
    )
}

export default Card