const Heading = ({ title, className }) => {
  return (
    <div
      className={`${className || ''} mx-auto mb-12 max-w-[50rem] md:text-center lg:mb-20`}
    >
      {title && <h2 className='h2'>{title}</h2>}
    </div>
  )
}

export default Heading
