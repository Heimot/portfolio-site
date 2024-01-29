import Contact from './features/Contact'
import Footer from './features/Footer'
import Information from './features/Information'
import MainMenu from './features/MainMenu'
import Navigation from './features/Navigation'
import Skills from './features/Skills'

const App = () => {
  return (
    <div>
      <Navigation />
      <MainMenu />
      <Information />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
