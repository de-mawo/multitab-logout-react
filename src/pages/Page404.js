import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <div>
        <h1> 404 page not Found</h1>
      </div>
      
      <Link to={'/'}>
      <button className='btn btn-danger rounded-pill'> Go Back Home</button>
      </Link>
      </div>
  )
}

export default Page404