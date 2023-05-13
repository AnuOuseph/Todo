import React  from 'react'
import { useState } from "react"
import Todos from './todos';


function Form() {
  //console.log(getData);
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [alert,setAlert] = useState(false)
  

  return (
    <div>
      <div className='form'>
        <form action="">
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className='text' placeholder='write something...' />
            <button className='button' onClick={(e)=>{
              e.preventDefault()
              if(todo){
              setTodos([...todos, {id:Date.now(),text:todo,status:false}])
              setAlert(false)
              }else{
              setAlert(true)
              }
              setTodo("")
            }}>Enter</button>
        </form>
      </div>
      <Todos todos={todos} setTodos={setTodos} alert={alert}/>
    </div>
  )
}

export default Form
