import React from 'react'
import MyImage from '../client/img/smart_home.png'

export default function Title() {
  return (
    <div style={{ display: 'flex', marginBottom: '40px' }}><img src={MyImage} alt='SmarHouse' style={{ width: '300px', height: '150px' }} />
      {/* <h1>Smart Home</h1> */}
    </div>
  )
}
