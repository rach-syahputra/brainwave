import Tagline from './Tagline'

const Heading = ({ title, text, tag, className }) => {
  return (
    <div
      className={`${className || ''} mx-auto mb-12 max-w-[50rem] md:text-center lg:mb-20`}
    >
      {tag && <Tagline className='mb-4 md:justify-center'>{tag}</Tagline>}
      {title && <h2 className='h2'>{title}</h2>}
      {text && <p className='body-2 mt-4 text-n-4'>{text}</p>}
    </div>
  )
}

export default Heading
