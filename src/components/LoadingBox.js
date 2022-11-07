import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingBox = () => {
  return (
      <Spinner animation='border' role='status'>
          <sapn className='visually-hidden'>Loading...</sapn>
      </Spinner>
  )
}

export default LoadingBox