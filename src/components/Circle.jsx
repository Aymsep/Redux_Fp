import React from 'react'

const Circle = ({color,filter,border}) => {
  return (
    <div className="app__circle" >
      <div className="circle"
       style={
        {
          backgroundColor: color?color:'transparent',
          border:border?'3px solid gray':'none',
        }
      }
      ></div>
      <span style={{color:border?'gray':''}} >{filter}</span>
    </div>
  )
}

export default Circle