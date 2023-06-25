import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Title from './componente/Title';
import { useState } from 'react';
import AddRoom from './componente/AddRoom';
import PlusButtonMain from './componente/PlusButtonMain';
import RoomInCube from './componente/RoomInCube';
import InRoom from './componente/InRoom';

let animCounterFirst = 0;

function App() {
  const [rooms, pushRoom] = useState([])


  const addAnimCount = () => {
    animCounterFirst ++
  }

  const addRoomFun = (name, type, color) => {

    let tempNav = '/room' + name;
    let newRoom = new Room(name, type, color, tempNav)
    pushRoom((prevRooms) => [...prevRooms, newRoom])
  }

  const showRooms = () => {
    return rooms.map((val) => {
      return <RoomInCube roomDetailes={val} />
    })
  }

  const creatPro = (product) => {                                        //fun for creating a product
    let tempPro = new ProductInList(product)
    console.log('created the pro' + product);
    return tempPro

  }

  const showRoomsRouts = () => {      

    return rooms.map((val) => {
      return <Route path={val.nav} element={<InRoom room={val} creatPro={creatPro} />} />

    })

  }

  let bColor = '#51a4c6'


  return (
    <div id='container' style={{ backgroundColor: bColor }}>
      <Title />
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
          <Routes>
            <Route path='/addRoom' element={<AddRoom addRoomToArry={addRoomFun} />} />
            <Route path='/' element={showRooms()} />
            {showRoomsRouts()}
          </Routes>
        </div>
        <PlusButtonMain animCounter = {animCounterFirst} add = {addAnimCount} />
      </BrowserRouter>
      {console.log(rooms)}
    </div>
  );
}

class Room {
  productsVal = [];
  products = [];

  constructor(name, type, color, nav) {
    this.name = name
    this.type = type
    this.color = color
    this.nav = nav
  }
}

class ProductInList {
  state = false
  colorState = 'red'
  constructor(type) {
    this.type = type
  }
}

export default App;
