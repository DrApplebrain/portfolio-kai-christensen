import "../App.css";
import decrypt from "../assets/pictures/decrypt.png"; // Tell Webpack this JS file uses this image
import fighterGame from "../assets/pictures/fighterGame.PNG"; // Tell Webpack this JS file uses this image

function Projects() {
  return (
    <>
      <div className="project">
        <div className="projectside">
          <a
            href="https://drapplebrain.github.io/pmmm-decrypt"
            target="blank"
            className="projects"
          >
            <img
              src={decrypt}
              alt="website to de/encrypt text in ASCII code"
              width="200rem"
              height="100%"
              className="projectIMG"
            ></img>

            <div className="projectsText">
              <h3>PMMM-Decrypt</h3>
              <p>
                Eine Web-Anwendung zum verschlüsseln von Text in ASCII Code via Image
              </p>
            </div>
          </a>
        </div>
        <div className="projectside">
          <a
            href="https://drapplebrain.github.io/fighter-game/"
            target="blank"
            className="projects"
          >
            <img
              alt="website: choose character for fight"
              src={fighterGame}
              width="200rem"
              height="100%"
              className="projectIMG"
            ></img>

            <div className="projectsText">
              <h3>FighterGame</h3>
              <p>
                Ein rundenbasiertes Browser-Game bei welchem die User bekannte
                Charaktere wählen können.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
export default Projects;
