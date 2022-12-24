import './style.css'
import img_followers from '../../assets/followers.svg'
import img_following from '../../assets/followers.svg'
import img_company from '../../assets/company.svg'
import img_location from '../../assets/location.svg'
import img_repository from '../../assets/repository.svg'
import img_logo from '../../assets/logo.svg'
import { useEffect, useRef } from 'react'

function Card({name, avatar, following, followers, repos, company, location}){

  const ref = useRef(null);

  useEffect(()=>{

    const element = ref.current

    const colors = ['border_blue', 'border_red', 'border_green','border_yellow', 'border_orange', 'border_pink','border_violet', 'border_purple', 'border_brown','border_lime', 'border_turquoise'];
    const border = document.getElementById('border');
    let cont = -1;

    element.addEventListener('click', function(){
      cont++
      border.className = colors[cont]
      
      if(cont == colors.length){
        cont = -1
      }

      


    })
  });
  
  
    return (
      <div className="card">
        <main>
          <div id='border'></div>
          <section id='section_name'>
            <img id='logo' src={img_logo} alt="" />
            <strong>{name}</strong>
          </section>
          <img id='avatar' src={avatar} alt="" />
          <ul>
            <li>
              <img src={img_followers} alt="" />
              <p>{followers}</p>
              followers
            </li>
            <li>
              <img src={img_following} alt="" />
              <p>{following}</p>
              following
            </li>
            <li>
              <img src={img_repository} alt="" />
              <p>{repos}</p>
              repositórios
            </li>
            <li>
              <img src={img_company} alt="" />
              <p>{company}</p>
            </li>
            <li>
              <img src={img_location} alt="" />
              <p>{location}</p>
            </li>
          </ul>
          <section id='section_footer'>
            <img id='footer' src={img_logo} alt="" />
            <strong>ROCKETCARD</strong>
          </section>
        </main>
        <aside>
          <h1>Customizar RocketCard</h1>
          <button id='button_bg' ref={ref}>Gerar Background</button>
        </aside>
      </div>
    )
}


export default Card
