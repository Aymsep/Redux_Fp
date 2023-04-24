import React from 'react'
import {BsListTask} from 'react-icons/bs'

const Headline = ({icon,text}) => {
  return (
    <div className="app__headline">
        {icon}
        <span>{text}</span>
    </div>
  )
}

export default Headline