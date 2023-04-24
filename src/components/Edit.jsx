import React,{useEffect} from 'react'
import { useState } from 'react'
import { AiOutlineConsoleSql } from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux'
import { editTask,addTask,emptyTask } from '../feauters/tasks'


const Edit = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState('')
  const editedTask = useSelector(state=>state.tasks.edit[0])
  const changehandler = (e)=>{
    setData(e.target.value)
  }
  const setDataTask = (e) => {
    const newTask = {
      ...editedTask,
      task: data,    
    };
    dispatch(addTask(newTask))
  }

  return (
    <div className="app__edit">
      <div className="edit__bo">
        <input type="text" onChange={changehandler} defaultValue={editedTask?.task} />
        <button onClick={()=>setDataTask()} >Edit Task</button>
      </div>
    </div>
  )
}

export default Edit