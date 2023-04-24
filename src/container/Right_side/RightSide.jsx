import React,{useState,useRef} from 'react'
import Circle from '../../components/Circle'
import Headline from '../../components/Headline'
import {BiTimeFive,BiTask} from 'react-icons/bi'
import Task from './Task/Task'
import { useEffect } from 'react'
import { addTask,emptyTask } from '../../feauters/tasks'
import { useSelector,useDispatch } from 'react-redux'




const RightSide = () => {
  const dispatch = useDispatch()
  const color = useSelector(state=>state.filter.filteritems)
  const tasks = useSelector(state=>state.tasks.tasksList)
  const [inputdata, setinputdata] = useState()
  let id_task = 0
  const handlechange = e =>{
    setinputdata({...inputdata,[e.target.name]:e.target.value,isdone:false})
  }
  const addtask = (e) =>{
    if(e.key=='Enter'){
      dispatch(addTask({...inputdata,id:tasks?.length}))
      document.getElementById('input_task').value = ''
    }
  }
  return (
    <div className='app__RightSide' >
      <div className="input-right">
          <input  id="input_task" onKeyPress={addtask} onChange={handlechange} name='task' type="text" placeholder="What is your next task ?" />
          <div className="app__rightside-colors">
            {
              color.slice(0,3).map((item,id)=>{
                const {color} = item
                return (
                  <Circle key={id} color={color}/>
                )
              })
            }
          </div>
            <div className="app__rightside-addition">
                <BiTimeFive/>
                <BiTask/>
            </div>
      </div>
      <Task/>
    </div>
  )
}

export default RightSide