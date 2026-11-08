import { useState } from "react";
import CV from "./components/CV";
import TotalInputScreen from "./components/Inputs";
import "./styles/mainStyles.css";
import "./styles/toggleStyles.css";

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
      {
        school: "Rahula College",
        degree: "School",
        start: "01/2018",
        end: "01/2024",
        location: "Matara, Sri Lanka",
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
    <div>
      <div id="switchHolder">
        <label class="switch">
          <input
            type="checkbox"
            onChange={(e) => {
              document.documentElement.dataset.theme = e.target.checked
                ? "light"
                : "dark";
            }}
          />
          <span class="slider"></span>
        </label>
      </div>
      <div id="mainDiv">
        <TotalInputScreen data={data} setData={setData} />
        <CV data={data} />
      </div>
    </div>
  );
}

export default App;
