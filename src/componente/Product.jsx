import React, { useState } from 'react'


export default function Product(props) {
const [proState,changState] = useState(props.product.state)   // מגדיר פעם אחת?  את הערך הראשוני וזהו?

const activeChange = () => {
  
  const myDiv = document.getElementById('proDiv');

  if (proState == true) {
    props.product.state = false
    changState(false)
    props.product.colorState = ('red')
  }
  else {
    props.product.state = true
    changState(true)
    props.product.colorState = ('green')    
  }
}
  
  return (
    <div className={`proDiv ${props.delet ? 'isOnDelet' : ''}`} style={{backgroundColor: props.product.colorState}} onClick ={activeChange}>{props.product.type}</div>
    
  )
}

