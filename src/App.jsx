import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage";
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
    const switchElement = document.getElementById('switch');

    // Add an event listener to listen for the change event on the switch
    switchElement.addEventListener('change', function() {
      document.body.classList.toggle('dark-mode', switchElement.checked);
    });
  },[])
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
