import React from 'react'

const Error = () => {
  return (
    <div className=' h-screen w-screen  flex justify-center items-center'>
      <div className='flex items-center flex-col gap-6'>
        <p className='text-white text-6xl'>404</p>
        <p className='text-white text-4xl'>Page not found </p>
      </div>
    </div>
  )
}

export default Error