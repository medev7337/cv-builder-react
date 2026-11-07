import { useState } from "react";
import CV from "./components/CV";
import PersonalDetails from "./components/Inputs";
import "./styles/mainStyles.css";

function App() {
  const [data, setData] = useState({
    fullName: "Your Name",
    email: "yourmail@email.com",
    phone: "+94123456789",
    address: "1234, First Street, Second City",
    education: [
      {
        school: "NIBM",
        degree: "Computer Science",
        start: "01/2025",
        end: "01/2027",
        location: "Kandy, Sri Lanka",
      },
    ],
    experience: [
      {
        company: "CD Projekt Red",
        position: "Game Programmer",
        description:
          "Game Programmer at CD PROJEKT RED, specializing in gameplay systems and mechanics. Experienced in developing optimized, immersive gameplay features and collaborating with multidisciplinary teams. Passionate about creating engaging player experiences through clean, efficient code.",
        start: "01/2027",
        end: "01/2030",
        location: "Remote From Sri Lanka",
      },
    ],
  });

  return (
    <div id="mainDiv">
      <PersonalDetails data={data} setData={setData} />
      <CV data={data} />
    </div>
  );
}

export default App;
