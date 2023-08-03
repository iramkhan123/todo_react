import React, { Component } from 'react'
import '../App.css';
export default class Todo extends Component {
  constructor(){
    super()
    this.state={
      tasks:[{id:1,txt:"Task 1"},{id:2,txt:"Task 2"},{id:3,txt:"Task 3"}],
      currTask : "",
    };
  }
  HandleChange=(e)=>{
    let val=e.target.value;
    this.setState({currTask:val});
}
HandleAdd=()=>{
  let ntasks=[...this.state.tasks,{id:this.state.tasks.length+1,txt:this.state.currTask}];
  this.state.currTask='';
  this.setState({tasks:ntasks});
}
HandleDelete=(id)=>{
  let ntasks=this.state.tasks.filter( (task)=>{
      return task.id!=id;
  });
  this.setState({tasks:ntasks});
}
  
    
    render() {
      // const tasks=[{id:1,txt:"Task 1"},{id:2,txt:"Task 2"},{id:3,txt:"Task 3"}];
      // console.log(this.state.currTask);
      return (
          <div className="overall">
              <header className="cont"><h1>TODO List</h1></header>
              <hr/>
              <div className="input-container">
                  <input className="inp" value={this.state.currTask} onChange={this.HandleChange} type="text"></input>
                  <button className="add-btn" onClick={this.HandleAdd}>Add</button>

              </div>

              <div className="class-list">
                  <ul>
                      {
                          this.state.tasks.map( (task) =>(
                              <li className="new-entry">
                                  <div className="back">
                                  <h2>{task.txt}</h2>
                                  <button className="btn" onClick={()=>{this.HandleDelete(task.id)}}>Delete</button>
                              </div>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          
          </div>
      )
  }
}