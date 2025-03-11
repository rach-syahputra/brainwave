import ButtonGradient from './assets/svg/ButtonGradient'

import Benefits from './components/Benefits'
import Header from './components/Header'
import Hero from './components/Hero'

const App = () => {
  return (
    <>
      <div className='overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]'>
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  )
}

export default App
