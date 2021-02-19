import React from 'react'
import Task from './Task'
import { ITasks } from '../types'

const Tasks:React.FC<ITasks> = ({ tasks }) => {
  return (
    <React.Fragment>
      {tasks.map((task) => <Task completed={task.completed} title={task.title} />)}
    </React.Fragment>
  )
}

export default Tasks