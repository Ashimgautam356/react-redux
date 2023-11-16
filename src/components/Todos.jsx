import React from 'react'
import {useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {

  const todos = useSelector(state => state.todos)
  console.log(todos)
  const dispatch = useDispatch()

  return (
    <div>
      {todos.map(item =>{
        return (
          <>
            <h3>{item.text}</h3>
            <h4 onClick={()=>{dispatch(removeTodo(item.id))}}>Remove</h4>
          </>
        )
      })}
    </div>
  )
}

export default Todos