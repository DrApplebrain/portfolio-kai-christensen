import '../App.css';
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import me from '../assets/pictures/me.png'; // Tell Webpack this JS file uses this image

function Content() {
  
  return (
    <>

      <div className="content">
      <img src={me} alt="thats me" className='contentImage'/>
        <p className='contentInside'>Guten Tag, ich bin Kai Christensen, 29 Jahre alt und passionierter Web-Entwickler.
          Ich bin ein Entwickler mit Leidenschaft für die Entwicklung zugänglicher, pixelgenauer Benutzeroberflächen, 
          die durchdachtes Design mit robuster Technik verbinden.
          <br></br><br></br>
          Meine Lieblingsarbeit liegt an der Schnittstelle von Design und Entwicklung, der Schaffung von Erlebnissen,
          die nicht nur großartig aussehen, sondern auch sorgfältig auf Leistung und Benutzerfreundlichkeit ausgelegt sind.
          <br></br><br></br>
          Derzeit arbeite ich in einem Team an einer Web-Site bei welcher die User ein KI-Textadventure mit ein paar Worten selber erstellen kann.
          Ich sorge sowohl im Backend als auch im Frontend dafür, dass unsere Plattform den Web-Zugänglichkeitsstandards und Best Practices entspricht,
          um ein integratives Benutzererlebnis zu bieten.
          <br></br><br></br>

          In der Vergangenheit hatte ich die Gelegenheit, Software in den unterschiedlichsten Bereichen zu entwickeln.

          
          <br></br><br></br>
          Meine Freizeit verbringe ich damit, Musik zu produzieren, Zeit mit Freunden und Familie zu verbringen und regelmäßig zu trainieren.
        </p>
        <br></br>
        <Skills></Skills>
        <Projects></Projects>
        
      </div>
    </>
  )
}

export default Content