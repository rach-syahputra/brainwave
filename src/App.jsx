import ButtonGradient from './assets/svg/ButtonGradient'

import Benefits from './components/Benefits'
import Collaboration from './components/Collaboration'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <div className='overflow-hidden pb-20 pt-[4.75rem] lg:pt-[5.25rem]'>
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
