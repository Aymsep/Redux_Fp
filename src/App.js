import React, { useEffect } from 'react'
import LeftSide from './container/Left_side/LeftSide'
import RightSide from './container/Right_side/RightSide'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
const App = () => {
  const list = useSelector(state=>state.filter.filteritems)

  return (
    <div className="app__container">
      <LeftSide/>
      <RightSide/>
    </div>
  )
}

export default App