import React from 'react'

function Todos({todos, setTodos, alert}) {
  console.log("here",alert);
  console.log("kkkkkkkkkkkkkk");
  let alertMsg;
  if(alert){
    alertMsg = "write something...";
  }else{
    alertMsg = "";
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='list col-md-6 p-4'>
        <div>
         {alertMsg}
        </div>
          { todos && 
              todos.map((obj)=>{
                obj.status = Boolean(obj.status)
                return (
                  <div className='items col-md-12 m-1'>
                    <div className='left d-flex mt-1'>
                      <input type="checkbox" onChange={(e)=>{
                        console.log(e.target.checked);
                        setTodos(todos.filter(items=>{
                          if(items.id===obj.id){
                            obj.status = e.target.checked
                            console.log(obj.status,"hhhhhh");
                          }
                          return items
                        }))
                        console.log(obj,"obj");
                        console.log("komokmp,p");
                      }} value={obj.status} className='check mt-2 m-1' />
                      <input type="text" className='mx-2 data' style={{textDecoration: obj.status ? 'line-through' :  'none', opacity: obj.status ? 0.5 : 1,}} value={obj.text} />
                      {/* <h4 className='mx-2' style={{textDecoration: obj.status ? 'line-through' :  'none', opacity: obj.status ? 0.5 : 1,}}>
                      {obj.text}
                      </h4> */}
                    </div>
                    <div className='right '>
                        <button className='close m-1 p-1 bg-dark text-white' 
                        onClick={()=>{
                          setTodos(todos.filter(items=> items.id !== obj.id
                          ))
                        }}
                        ><b>
                          X
                          </b>
                        </button>
                        <button className='close m-1 p-1 bg-dark text-white'
                        onChange={(e)=>{
                          setTodos(todos.filter(items=> {
                            if(items.id === obj.id){
                              obj.text = e.target.value
                            }
                            return items
                          }))
                        }}
                        >
                        <i class="fas fa-edit"></i>
                        </button>
                    </div>
                  </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}

export default Todos
