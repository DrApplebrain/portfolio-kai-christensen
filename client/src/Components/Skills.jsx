import '../App.css';


function Skills() {

  function change(variable){
    let skill = document.querySelectorAll(".hideSkill")[variable]
    if(skill.style.display === "grid"){
        skill.style.display = "none";
    }else{
        skill.style.display = "grid";
    }

    
    
  }
  return (
    <>
        <div id='skillID' className='skills'>
            <div className='oneSkill' onClick={() => change(0)}>JavaScript</div>
            <div className='hideSkill'>JavaScript ist eine Programmiersprache, die Entwickler verwenden, um interaktive Webseiten zu erstellen. Von der Aktualisierung von Social Media Feeds bis hin zur Anzeige von Animationen und interaktiven Karten können JavaScript-Funktionen die Benutzerfreundlichkeit einer Website verbessern.</div>
            <div className='oneSkill' onClick={() => change(1)}>React</div>
            <div className='hideSkill'>React ist eine der beliebtesten JavaScript-Bibliotheken zur Entwicklung von mobilen und Web-Anwendungen. Entwickelt von Meta (ehemals Facebook), ermöglicht React Entwicklern das Erstellen wiederverwendbarer Komponenten zum Aufbau von Benutzeroberflächen (UIs). Es ist wichtig zu beachten, dass React kein Framework ist.</div>
            
            
            <div className='oneSkill' onClick={() => change(2)}>CSS3</div>
            <div className='hideSkill'>Mit CSS3 wird das Aussehen der einzelnen Elemente in einem Webdokument festgelegt, so wie es im Browser erscheinen soll. Webseiteninhalte werden so ansprechend und User-freundlich gestaltet.</div>
            <div className='oneSkill' onClick={() => change(3)}>HTML5</div>
            <div className='hideSkill'>HTML5 hat die grundlegenden Tags eines HTML-Dokuments drastisch weiterentwickelt. Diese semantischen Tags bieten eine klarere und aussagekräftigere Struktur für den Inhalt einer Webseite und verbessern somit die Zugänglichkeit, die Indexierung durch Suchmaschinen und das Gesamtverständnis des Dokuments.</div>
            <div className='oneSkill' onClick={() => change(4)}>MongoDB</div>
            <div className='hideSkill'>Als Dokumentdatenbank erleichtert MongoDB Entwicklern das Speichern strukturierter oder unstrukturierter Daten. Es verwendet ein JSON-ähnliches Format zum Speichern von Dokumenten.</div>
            <div className='oneSkill' onClick={() => change(5)}>Node.js</div>
            <div className='hideSkill'>Node.js ist eine Javascript-Laufzeitumgebung, die sowohl Daten sehr schnell verarbeitet als auch einfach zu skalieren ist. Mit Node.js möchte man die Webentwicklung vereinheitlichen und bekommt die Möglichkeit, eine Programmiersprache sowohl im Frontend als auch im Backend zu verwenden.</div>
            <div className='oneSkill' onClick={() => change(6)}>ExpressJS</div>
            <div className='hideSkill'>Express.js ist ein serverseitiges Webframework für die JavaScript-basierte Plattform Node.js. Es erweitert Node.js um Werkzeuge, mit denen das Entwickeln moderner Webanwendungen einfacher gestaltet wird</div>
            <div className='oneSkill' onClick={() => change(7)}>C#</div>
            <div className='hideSkill'>C# ist eine objektorientierte und typsichere Programmiersprache. Sie integriert sich in .NET-Plattformen, die Cross-Development für Anwendungen für Windows, macOS, iOS, Android und Linux ermöglichen.</div>
        </div>
    </>
    )
  }
  export default Skills
