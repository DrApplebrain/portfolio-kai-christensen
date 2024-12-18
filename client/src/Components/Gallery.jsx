import '../App.css';
import Navbar from './Navbar'
import logo from './assets/pictures/logo.png'


export default function Gallery() {
  return (
    <>
      <Navbar></Navbar>
        <img src={logo} />
    </>
    )
  }