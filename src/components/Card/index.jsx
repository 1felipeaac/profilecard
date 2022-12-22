import './style.css'
import img_followers from '../../assets/followers.svg'
import img_following from '../../assets/followers.svg'
import img_company from '../../assets/company.svg'
import img_location from '../../assets/location.svg'
import img_repository from '../../assets/repository.svg'
import img_logo from '../../assets/logo.svg'

function Card({name, avatar, following, followers, repos, company, location}){
  
  
    return (
      <div className="card">
        <main>
          <div id='border'></div>
          <section>
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
          <button>Gerar Background</button>
        </aside>
      </div>
    )
}


export default Card
