import React from 'react'
import { ITask } from '../types'

const Task:React.FC<ITask> = (props) => {
  const { title, completed } = props;
  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</div>
  )
}

export default Task