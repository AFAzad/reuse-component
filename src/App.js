// import logo from './logo.svg';
import './App.css';
import React from 'react'
import User from './User'

function App() {
  const user = [
    {name:"Abul", Email:"abc@gmail.com",Id:"253166"},
    {name:"Rahul", Email:"rahul@gmail.com",Id:"253100"},
    {name:"Prince", Email:"prince@gmail.com",Id:"253186"},
    {name:"Guddu", Email:"guddu@gmail.com",Id:"253196"},
    {name:"Razi", Email:"razi@gmail.com",Id:"253196",}
  ]
  
  return (
    <div className="App" >
      <h1>Resuse Component with list</h1>
      
    {
      user.map((item,i)=>
      <User data={item}/>
      )
    }
    
    </div>
  );
}

export default App;