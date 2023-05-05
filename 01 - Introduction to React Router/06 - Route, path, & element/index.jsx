import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return(
  <BrowserRouter>
    <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="/about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
    
  )
}
function Home() {
  return(
    <h1>Humpage!</h1>
  )
}
function About(){
  return(
    <h1>Abutt Us</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 <App/>
);