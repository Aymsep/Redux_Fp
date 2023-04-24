import React,{useState, useEffect} from 'react'
import Headline from '../../components/Headline'
import Circle from '../../components/Circle'
import './Filter.css'
import ModalFIlter from '../../components/ModalFIlter'
import { useSelector,useDispatch } from 'react-redux'


const Filter = () => {
    const filterlist = useSelector(state=>state.filter.filteritems)
     
  return (
    <div className="app__filter">
        <ul className="app__filter-list">
            {
                filterlist.map((filter,id)=>(
                    <li key={id}>
                        <Circle color={filter.color} filter={filter.text}/>
                    </li>
                ))
            }
            <li className='app__addFilter' >
                <ModalFIlter/>
            </li>
        </ul>
    </div>
  )
}

export default Filter