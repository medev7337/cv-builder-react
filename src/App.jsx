import { useState } from "react";
import CV from "./components/CV";
import TotalInputScreen from "./components/Inputs";
import DownloadPDF from "./components/ExportPDF";
import "./styles/mainStyles.css";
import "./styles/toggleStyles.css";

function App() {
  const [data, setData] = useState({
    fullName: "Alex Morgan",
    email: "alex.morgan.dev@gmail.com",
    phone: "+1 415 555 0138",
    address: "San Francisco, California, USA",

    education: [
      {
        school: "University of California, Berkeley",
        degree: "B.Sc. Computer Science",
        start: "09/2019",
        end: "05/2023",
        location: "Berkeley, California, USA",
      },
      {
        school: "Lincoln High School",
        degree: "High School Diploma",
        start: "09/2015",
        end: "06/2019",
        location: "San Francisco, California, USA",
      },
    ],

    experience: [
      {
        company: "Vercel",
        position: "Senior Software Engineer",
        description:
          "Designed and developed scalable web applications using React, Next.js, and TypeScript. Led frontend architecture improvements, optimized application performance, and collaborated with cross-functional teams to deliver reliable, user-focused products. Contributed to CI/CD workflows and improved developer experience through reusable components and automated tooling.",
        start: "06/2024",
        end: "Present",
        location: "Remote",
      },
      {
        company: "Stripe",
        position: "Software Engineer",
        description:
          "Developed and maintained backend services using Node.js and PostgreSQL. Built REST APIs, improved database query performance, and implemented automated testing to improve system reliability. Worked closely with product designers and engineers to deliver secure and scalable payment solutions.",
        start: "07/2023",
        end: "05/2024",
        location: "San Francisco, California, USA",
      },
    ],
  });

  return (
    <div>
      <div id="switchHolder">
        <label className="switch">
          <input
            type="checkbox"
            onChange={(e) => {
              document.documentElement.dataset.theme = e.target.checked
                ? "light"
                : "dark";
            }}
          />
          <span className="slider"></span>
        </label>
        <DownloadPDF />
      </div>
      <div id="mainDiv">
        <TotalInputScreen data={data} setData={setData} />
        <CV data={data} />
      </div>
    </div>
  );
}

export default App;
