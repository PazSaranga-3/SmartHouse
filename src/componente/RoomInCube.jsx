import React from 'react'
import { Link } from 'react-router-dom'
import doorImg from '../client/img/door.png'

export default function RoomInCube(props) {

  return (
    <Link to={props.roomDetailes.nav} style={{ textDecoration: 'none' }}>
      <div style={{ display: 'flex', border: '1px solid black', color: 'black', backgroundColor: props.roomDetailes.color, borderRadius: '20px', textAlign: 'center', maxWidth: '150px', flexDirection: 'column', margin: '8px', padding: '4px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)' }}>
        {props.roomDetailes.name}
        <img src={doorImg} alt="door" height={'60px'} style={{ margin: '10px', boxShadow: '5px 2px 5px rgba(0, 0, 0, 0.3)' }} />
      </div>
    </Link>
  )
}
