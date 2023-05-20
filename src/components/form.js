import React  from 'react'
import { useState,useEffect } from "react"
import Todos from './todos';


function Form() {
  //console.log(getData);
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(()=>{
    const data= JSON.parse(localStorage.getItem('todos'));
    console.log("arricved");
    return (data || "")
  })
  const [alert, setAlert] = useState(false)
  const [count, setCount] = useState(()=>{
    const count = JSON.parse(localStorage.getItem('count'));
      if(count) return count
      else return 0
  })
    
    // function getData(){
    //   const data = localStorage.getItem('todos')
    //   if(data){
    //     setTodos(JSON.parse(data))
    //   }
    //   const count = localStorage.getItem('count')
    //   if(count){
    //     setCount(JSON.parse(count))
    //   }
    // }
    
    function setData(){
      if(todo){
        setCount(count+1)
        setTodos([...todos, {id:Date.now(),text:todo,status:false,count:count}])
        // localStorage.setItem('todos',JSON.stringify(todos))
        setAlert(false)
        // localStorage.setItem('count',JSON.stringify(count))
        }else{
        setAlert(true)
        }
        setTodo("")
    }
    useEffect(()=>{
      localStorage.setItem('todos',JSON.stringify(todos))
      localStorage.setItem('count',JSON.stringify(count))
    },[todos]);
    
  
  return (
    <div>
      <div className='form'>
        <p className='quote'>Hello, there you've got <span className='count'>{count}</span> pending tasks..!</p>
        <form action="">
            <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} className='text' placeholder='write something...' />
            <button className='button' onClick={(e)=>{
              e.preventDefault()
              setData()
            }}><b>+</b></button>
        </form>
      </div>
      <Todos todos={todos} setTodos={setTodos} count={count} setCount={setCount} alert={alert}/>
    </div>
  )
}

export default Form
