import "./App.css";
import { skillsArr } from "./skills.js";
function App() {
  return (
    <div className="App">
      <ProfileImage />
      <Info />
    </div>
  );
}

function ProfileImage() {
  return (
    <img
      alt="ProfileImage"
      src="WhatsApp Image 2023-05-07 at 2.54.32 PM.jpeg"
    ></img>
  );
}

function Info() {
  return (
    <div className="info">
      <Bio />
      <Skills />
    </div>
  );
}

function Bio() {
  return (
    <div>
      <h1>Mustafa Ahmed</h1>
      <p>
        MERN stack developer skilled with Js , HTML , css , react & NodeJs .
        Seeking for a stable position in a company where I can use my skills.
      </p>
    </div>
  );
}

function Skills() {
  // const mySkills = skillsObj;

  return (
    <div className="skills-section">
      {skillsArr.map((skillObj) => {
        return <Skill skills={skillObj} key={skillObj.skill} />;
      })}
    </div>
  );
}

function Skill({ skills }) {
  let level = null;
  switch (skills.level) {
    case "beginner":
      level = "👶";
      break;
    case "intermediate":
      level = "👍";
      break;
    case "advanced":
      level = "💪";
      break;

    default:
      break;
  }

  return (
    <div className="skills" style={{ backgroundColor: skills.color }}>
      <h6>{skills.skill}</h6>
      <span>{level}</span>
    </div>
  );
}

export default App;
