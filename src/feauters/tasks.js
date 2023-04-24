import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: 'task',
    initialState:{
        tasksList:[],
        edit:[]
    },
    reducers:{
        addTask(state,{payload}){
            const item = payload
            const exiting = state.tasksList.find(task=>task.id == item.id)
            if(exiting){
                const taskIndex = state.tasksList.findIndex(task => task.id == item.id);
                state.tasksList[taskIndex] = payload

            }else{
                state.tasksList.push(payload)
            }
        },
        deleteTask(state,{payload}){
            const id = payload
            state.tasksList = state.tasksList.filter(task=>task.id != id)
        },
        editTask(state,{payload}){
            state.edit.push(payload)
        },
        emptyTask(state){
            state.edit = []
        }
    }
})

export const {addTask,emptyTask,editTask,deleteTask} = taskSlice.actions 

export default taskSlice.reducer