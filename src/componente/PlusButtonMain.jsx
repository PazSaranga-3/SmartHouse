import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import BottomImg from '../client/img/Bottom.png'
import '../client/css/buttom.css'

export default function PlusButtonMain(props) {

  const location = useLocation()
  const showDiv = () => {

    if (props.animCounter == 0 ){
      props.add()
      return <div style={{ marginTop: '80px' , marginBottom : '0' , paddingBottom :'0'}}>
      {location.pathname === '/' && <h1 class ='jumpText'>Press On The Plus</h1>}
      </div>
    }
  }

  return (
    <div style={{display:'flex', flexDirection : 'column', alignItems : 'center'}}>
      {showDiv()}
    <div style={{ marginTop: '0', paddingTop :'10px' }}>
      <button>button</button>
      {location.pathname === '/' && <Link to='/addRoom'><img src={BottomImg} alt="bottom" style={{ position: 'relative' }} /></Link>}
    </div>
    </div>
  )
}
