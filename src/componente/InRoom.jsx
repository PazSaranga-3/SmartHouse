import React, { useState, useEffect } from 'react'
import Product from './Product'
import '../client/css/inRoom.css'
import { useNavigate } from 'react-router-dom'



export default function InRoom(props) {
  const [flag, changeDiv] = useState(false)                              // hook to change divs
  const [selectChois, changeChois] = useState()                           // hook fot the slect
  const [deletActive, changeDeleteActive] = useState(false)
  
  const deletePro = () => {
    changeDeleteActive(true);
  }


  const nav = useNavigate();

  const change = () => {                                                // fun to change flag
    if (flag == true) {
      changeDiv(false)
    }
    else {
      changeDiv(true)
    }
  }

  const back = () => {
    nav('/');
  }

  const addToProList = () => {

    let tempProArr = [...props.room.productsVal]
    if (selectChois == "") {
      alert('ERROR')
      change()
    }
    else if (selectChois == "StereoSystem" && tempProArr.findIndex(obj => obj.type === selectChois) != -1) { // לא עובד
      alert('ERROR - You already have stereo system in the room')
      change()

    }
    else if (selectChois == "boilermaker" && props.room.type != 'bathroom') {
      alert('boilermaker can be added only in the bathroom')
      change()
    }
    else if (props.room.products.length == 5) {
      alert('to many products in the room')
      change()
    }
    else {
      let p = props.creatPro(selectChois)
      props.room.products.push(<Product product={p} delet = {deletActive} />)
      props.room.productsVal.push(p)
      // changeChois("")
      change()
    }
  }


  if (flag == false) {
    return <div className='main' style={{ backgroundColor: props.room.color, display: 'flex', flexDirection: 'column' }}>
      <div  style={{ display: 'flex', flexDirection: 'row' }}>                                                                          {/* part one */}
        <div className='dit' style={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <div style={{ display: 'flex' }}>
              <p>Room name : </p> <p style={{ paddingLeft: '4px', letterSpacing: '0.5px', fontSize: '1.2rem' }}> {props.room.name}</p>
            </div>
            <br />
            <p>Your are in the {props.room.type}</p>
            <br />
            <button onClick={change}> Add Product to room </button>
          </div>
        </div>
        <div>
          <div>
            <p>Products :</p>
            <div className='dit' style={{ display: 'flex' }}>
              {props.room.products}
            </div>
          </div>
        </div>
      </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <button onClick={back}>Back</button>
          <button onClick={deletePro}>Delet product</button>
        </div>
    </div>
  }

  else {
    return <div className='main' style={{ backgroundColor: props.room.color, flexDirection: 'column' }}>
      <div>
        <div className="dit" style={{ margin: 'auto' }}>
          <select onChange={(e) => {
            let l = e.target.value
            changeChois(l)
          }}>
            <option disabled selected value="">Choose your product</option>
            <option value="lamp">lamp</option>
            <option value="boilermaker">boilermaker</option>
            <option value="StereoSystem">stereo system</option>
            <option value="AC">AC</option>
          </select>
          <button onClick={addToProList}>Add</button>
        </div>
      </div>
      <div >
        <button onClick={change}>Back</button>
      </div>
    </div>
  }

}
//// 
