import React,{useState} from 'react'
import Circle from '../../../components/Circle'
import './Task.css'
import {MdTaskAlt} from 'react-icons/md'
import {BsCircle} from 'react-icons/bs'
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'
import { addTask,deleteTask,editTask,emptyTask } from '../../../feauters/tasks'
import Edit from '../../../components/Edit'


const Task = ({task}) => {
  const [showedit, setShowedit] = useState(false)
  const dispatch = useDispatch()
  const tasks = useSelector(state=>state.tasks.tasksList)
  const edit_task = useSelector(state=>state.tasks.edit[0])
  const Handledelete = (id)=>{
    dispatch(emptyTask())
    dispatch(deleteTask(id))
  }
  const Handleedit = task =>{
    dispatch(emptyTask())
    setShowedit((prev)=>!prev)
    dispatch(editTask(task))
  }
  return (
    <div className="app__task">
      {
        tasks.map((task) =>(
          <div key={task.id}>
            <div  className="task">
                <Circle color={'red'}/>
                <span id='task_name'>{task.task}</span>
                <span id="task_time">7:30 pm</span>
                <MdTaskAlt/>
                <AiOutlineEdit onClick={() => Handleedit(task)} />  
                <AiOutlineDelete className='delete_svg' onClick={()=>Handledelete(task.id)}/>
            </div>

            {showedit && edit_task && edit_task.id == task.id && <Edit/>}
          </div>
        ))
      }

    </div>
  )
}

export default Task