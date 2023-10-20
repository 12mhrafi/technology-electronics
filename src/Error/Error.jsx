import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
  const error = useRouteError();

  return (
    <div className='text-5xl font-extrabold flex justify-center items-center w-full h-full'>
      
      <p>
        <i>{error.statusText || error.message} 404</i>
      </p>
    </div>
  )
}

export default Error