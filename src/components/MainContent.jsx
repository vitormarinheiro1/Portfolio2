import '../styles/components/MainContent.sass'
import AboutContainer from './AboutContainer'
import Projetos from './Projetos'
import TecnologiasContainer from './TecnologiasContainer'

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <TecnologiasContainer />
      <Projetos />
    </main>
  )
}

export default MainContent