import { benefits } from '../constants'
import Arrow from '../assets/svg/Arrow'
import ClipPath from '../assets/svg/ClipPath'

import Heading from './Heading'
import Section from './Section'
import { GradientLight } from './design/Benefits'

const Benefits = () => {
  return (
    <Section id='features' className='max-lg:pt-12'>
      <div className='container relative z-2 w-full'>
        <Heading
          className='md:max-w-md lg:max-w-2xl'
          title='Chat Smarter, Not Harder with Brainwave'
        />

        <div className='mb-10 flex flex-wrap items-center justify-center gap-10'>
          {benefits.map((item) => (
            <div
              className='relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]'
              style={{
                backgroundImage: `url(${item.backgroundUrl})`
              }}
              key={item.id}
            >
              <div className='pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem]'>
                <h5 className='h5 mb-5'>{item.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{item.text}</p>
                <div className='mt-auto flex items-center'>
                  <img
                    src={item.iconUrl}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <p className='ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1'>
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                style={{ clipPath: 'url(#benefits)' }}
                className='absolute inset-0.5 bg-n-8'
              >
                <div className='absolute inset-0 opacity-0 hover:opacity-10'>
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className='h-full w-full object-cover'
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits
