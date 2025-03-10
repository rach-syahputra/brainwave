import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

import { brainwave } from '../assets'
import MenuSvg from '../assets/svg/MenuSvg'
import { navigation } from '../constants'
import Button from './Button'
import { HamburgerMenuBackground } from './design/Header'

const Header = () => {
  const pathname = useLocation()
  const [openNavigation, setopenNavigation] = useState(false)

  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false)
      enablePageScroll()
    } else {
      setopenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return
    setopenNavigation(false)
    enablePageScroll()
  }

  return (
    <div
      className={`${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'} fixed left-0 top-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm`}
    >
      <div className='flex items-center px-5 py-4 lg:px-7.5 xl:px-10'>
        <a className='xl:mr-8' href='#hero block w-[12rem]'>
          <img src={brainwave} alt='Brainwave' width={190} height={40} />
        </a>

        <nav
          className={`${openNavigation ? 'flex' : 'hidden'} fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className='relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row'>
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`${item.onlyMobile ? 'lg:hidden' : ''} ${
                  item.url === pathname.hash
                    ? 'z-2 lg:text-n-1'
                    : 'lg:text-n-1/50'
                } relative block px-6 py-6 font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenuBackground />
        </nav>

        <a
          href='#signup'
          className='button mr-8 hidden font-code text-2xl uppercase text-n-1 text-n-1/50 transition-colors hover:text-n-1 lg:block lg:text-xs lg:font-semibold lg:hover:text-n-1'
        >
          New Account
        </a>
        <Button
          href='#login'
          className='hidden font-code text-2xl uppercase lg:flex lg:text-xs lg:font-bold'
        >
          Sign in
        </Button>

        <Button onClick={toggleNavigation} className='ml-auto px-3 lg:hidden'>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}

export default Header
