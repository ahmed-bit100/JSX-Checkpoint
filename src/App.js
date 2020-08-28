import React from 'react';
import './App.css';
import myImage from "./imageInSrc.jpg"
import "./style.css"

function App() {
  return (
    <div style={{border:'solid 1px black',maxWidth:"100vw"}}>  
 
    <h1 className="title red">Your name here</h1>  



          <img src={myImage}/> 

          <img src="imageInPublic.jpg" />  
    
    <video width={320} height={240} controls>  
 
    <source src="myVideo.mp4" type="video/mp4"/> 

</video> 
</div>

  );
}

export default App;
