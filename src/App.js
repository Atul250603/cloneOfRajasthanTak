import Navbar from "./components/Navbar";
import './App.css'
import Home from "./components/Home";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import Archive from "./components/Archive";
import News from "./components/News";

function App() {
  useEffect(()=>{
    function stickyNavbar(){
      let mainNavbar=document.querySelectorAll('.mainNavbar')[0];
      let respNavbar=document.querySelectorAll('.respNav')[0];
      let observer=new IntersectionObserver((entries)=>{
        const entry=entries[0];
        if(entry.isIntersecting===false){
          mainNavbar.classList.add('sticky');
        respNavbar.classList.add('sticky');
      }
        else{
          mainNavbar.classList.remove('sticky');
          respNavbar.classList.remove('sticky');
        }
      },{
        root:null,
        rootMargin:"",
        threshold:0
      });
      observer.observe(document.querySelectorAll('.subNavbar')[0]);
    }
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName('scrollTop')[0].style.display = "block";
      } else {
        document.getElementsByClassName('scrollTop')[0].style.display = "none";
      }
    }
    window.onscroll = function() {scrollFunction()};
    stickyNavbar();
  },[])
  return (
    <div className="mainContainer">
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/archive" element={<Archive/>}/>
    <Route exact path="/news" element={<News/>}/>
    </Routes>
    <ScrollTop/>
    <Footer/>
   </div>
  );
}

export default App;
