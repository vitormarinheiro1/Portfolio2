import SocialNetworks from './SocialNetworks'
import InformationContainer from './informationContainer'
import Avatar from '../assets/eu.jpeg'
import Curriculo from '../assets/CurrículoVitorMarinheiro.pdf'
import '../styles/components/sidebar.sass'


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vitor Marinheiro" />
      <p className="title">Desenvolvedor Fullstack</p>
      <SocialNetworks />
      <InformationContainer />
      <a href={Curriculo} download="CurrículoVitorMarinheiro" className="btn">
        Baixar Currículo
      </a>
    </aside>
  )
}


export default Sidebar