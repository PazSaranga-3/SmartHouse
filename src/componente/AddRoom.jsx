import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../client/css/inRoom.css'


export default function AddRoom(props) {
  const [type, typeVal] = useState("")
  const [roomName, nameVal] = useState("")
  const [color, colorVal] = useState('#ffffff')

  const nav = useNavigate();

  const addRoom = () => {
    // const containsLetters = /[a-zA-z]/.test(roomName)
    const lettersRegex = /[a-zA-Z]/g;
    const matches = roomName.match(lettersRegex);
    const containsLetters = matches !== null && matches.length > 0;
    if (type != "" && containsLetters != false) {
      props.addRoomToArry(roomName, type, color)
      nav('/')
    }
    else {
      alert('error!')
      nav('/')
    }
  }


  return (

    <div className='dit' style={{ margin: 'auto' }}>
      <select onChange={(e) => { typeVal(e.target.value) }}>
        <option disabled selected value="" >Choose an option</option>
        <option value="bathroom">Bathroom</option>
        <option value="kitchen">Kitchen</option>
        <option value="BedRoom">BedRoom</option>
      </select>
      <br></br>
      <input placeholder='Room name' maxLength={5} onChange={(e) => { nameVal(e.target.value) }} ></input>
      <br></br>
      <div>
        <label>Color : </label><input placeholder='Color' type="color" value={color} onChange={(e) => { colorVal(e.target.value) }} ></input>
      </div>
      <br></br>
      <button onClick={addRoom}>Add</button>


    </div>
  )
}
