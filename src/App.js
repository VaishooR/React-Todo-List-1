import './App.css';
import {useState} from "react";

function App() {
  const[userInput,setuserInput]=useState('');
  const[taskArray,settaskArray]=useState([]);
  
  let addTask=(event)=>{
    event.preventDefault();
    settaskArray([...taskArray,{id:taskArray.length===0? 1 : taskArray[taskArray.length-1].id+1,taskName:userInput}]);
    setuserInput("")
  }
  
  let deleteTask=(id)=>{
    settaskArray(taskArray.filter((eachtask)=>{
      return eachtask.id!==id
    }))
  }

  let editTask=(id)=>{
    console.log('edit btn')
  }

  let doneTask=(id)=>{
    settaskArray(taskArray.map((eachtask)=>{
      if(eachtask.id===id){
        return {...eachtask,completed:true}
      }else{
        return eachtask
      }
    }))
  }

  return (
    <div className="container">
      <h1>My-Todo-List</h1>
      <div className="header">
          <input type="text" placeholder="Enter task here..." onChange={(e)=>{setuserInput(e.target.value)}}/>
          <button className="btn" onClick={(event)=>addTask(event)}>Add Task</button>
      </div>
      
      <div className="todo-list">
        {taskArray.map((eachtask,key)=>{

          return <div key={key} className="task">

            <p style={{textDecoration:eachtask.completed?"line-through":'unset',color:eachtask.completed?"greenyellow":"white",textDecorationColor:eachtask.completed?"silver":"unset"}}>{eachtask.id}. {eachtask.taskName}</p>

            <div className="list-btn">
              <button onClick={editTask} title="Edit Task" className="edit-btn"><span class="material-symbols-outlined">edit_square</span></button>
              <button onClick={()=>deleteTask(eachtask.id)} title="Delete Task" className="delete-btn"><span class="material-symbols-outlined">delete</span></button>
              <button onClick={()=>doneTask(eachtask.id)} title="Complete Task" className="done-btn"><span class="material-symbols-outlined">check_circle</span></button>
            </div>

          </div>
        })}
      </div>
    </div>
  );
}

export default App;
