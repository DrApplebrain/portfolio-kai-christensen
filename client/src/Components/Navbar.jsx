import '../App.css';
import React from 'react';

function Navbar() {
 

  
    const handleClickScroll = () => {
      const element = document.getElementById('skillID');
      if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

function aboutMe(){
      window.scrollTo(0, -5000);
    }


    function projects(){
      window.scrollTo(0, 5000);
    }
  return (
    <>
      <div className="navbar">
        <button className="navbarButton" onClick={aboutMe}>Über mich</button>
        <button className="navbarButton" onClick={handleClickScroll}>Skills</button>
        <button className="navbarButton" onClick={projects}>Projects</button>
      </div>
    </>
  )
}
//{siteURL}
export default Navbar
