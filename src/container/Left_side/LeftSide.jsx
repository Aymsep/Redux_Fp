import React from 'react'
import Line from '../../components/Line'
import Filter from '../Filter/Filter'
import Profile from './Profile/Profile'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {BiTask} from 'react-icons/bi'
import {AiFillSetting} from 'react-icons/ai'
import Headline from '../../components/Headline'

const LeftSide = () => {
  return (
    <div className="app__LeftSide">
        <Profile/>
        <Line/>
        <Headline text={'today tasks'} icon={<BiTask/>} />
        <Filter/>
        <Headline text={'schedules tasks'} icon={<BsFillCalendarCheckFill/>} />
        <div className="app__leftside-set">
            <Headline text={'settings'} icon={<AiFillSetting/>} />
        </div>
    </div>
  )
}

export default LeftSide