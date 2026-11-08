import { useState } from "react";
import "../styles/inputStyles.css";

function EducationForm({ edId, data, setData, deleteData }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [newEd, setNewEd] = useState({
    school: data.school,
    degree: data.degree,
    start: data.start,
    end: data.end,
    location: data.location,
  });

  function updateEd(to, val) {
    const nd = {
      ...newEd,
      [to]: val,
    };
    setNewEd(nd);
  }

  function cancelEd() {
    setNewEd({
      school: data.school,
      degree: data.degree,
      start: data.start,
      end: data.end,
      location: data.location,
    });
  }

  function submitEd() {
    setData(edId, newEd);
  }

  const collapsedForm = (
    <div className="collapsedForm" onClick={() => setIsCollapsed(false)}>
      <p>{data.school}</p>
    </div>
  );

  // Returns collapsed if not shown else editable
  const inputForm = (
    <form className="educationForm" onSubmit={(e) => e.preventDefault()}>
      <div className="labelAndInput">
        <label htmlFor="educationInstitute">Institute</label>
        <input
          type="text"
          id="educationInstitute"
          defaultValue={newEd.school}
          onChange={(e) => {
            updateEd("school", e.target.value);
          }}
          maxLength={100}
        />
      </div>

      <div className="labelAndInput">
        <label htmlFor="educationDetails">Details</label>
        <input
          type="text"
          id="educationDetails"
          defaultValue={newEd.degree}
          onChange={(e) => {
            updateEd("degree", e.target.value);
          }}
          maxLength={100}
        />
      </div>

      <div className="dateInputHolder">
        <div className="labelAndInput">
          <label htmlFor="educationStartDate">Start Date</label>
          <input
            type="text"
            id="educationStartDate"
            defaultValue={newEd.start}
            onChange={(e) => {
              updateEd("start", e.target.value);
            }}
            maxLength={10}
          />
        </div>

        <div className="labelAndInput">
          <label htmlFor="educationEndDate">End Date</label>
          <input
            type="text"
            id="educationEndDate"
            defaultValue={newEd.end}
            onChange={(e) => {
              updateEd("end", e.target.value);
            }}
            maxLength={10}
          />
        </div>
      </div>

      <div className="labelAndInput">
        <label htmlFor="educationLocation">Location</label>
        <input
          type="text"
          id="educationLocation"
          defaultValue={newEd.location}
          onChange={(e) => {
            updateEd("location", e.target.value);
          }}
          maxLength={100}
        />
      </div>

      <div className="formButtonHolder">
        <button
          type="button"
          className="deleteButton"
          onClick={() => {
            deleteData(edId);
            setIsCollapsed(true);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className="cancelButton"
          onClick={() => {
            cancelEd();
            setIsCollapsed(true);
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="submitButton"
          onClick={() => {
            submitEd();
            setIsCollapsed(true);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );

  return isCollapsed ? collapsedForm : inputForm;
}

function EducationDetailsSection({ data, setData }) {
  function updateEducationData(edId, newData) {
    const nd = {
      ...data,
    };
    nd.education[edId] = newData;
    setData(nd);
  }

  function deleteEducationData(edId) {
    setData((prev) => ({
      ...prev,
      education: prev.education.filter((_, index) => index !== edId),
    }));
  }

  function addEducationData() {
    const nd = {
      ...data,
    };
    nd.education.push({
      school: "NEW ED",
      degree: "",
      start: "",
      end: "",
      location: "",
    });
    setData(nd);
  }

  return (
    <div id="educationDetailsSection">
      <h1>Education</h1>
      {data.education.length > 0 && (
        <ul>
          {data.education.map((d, i) => {
            return (
              <li key={crypto.randomUUID()}>
                <EducationForm
                  edId={i}
                  data={d}
                  setData={updateEducationData}
                  deleteData={deleteEducationData}
                />
              </li>
            );
          })}
        </ul>
      )}
      <button className="addButton" onClick={addEducationData}>
        +
      </button>
    </div>
  );
}

function ExperienceForm({ exId, data, setData, deleteData }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [newEx, setNewEx] = useState({
    company: data.company,
    position: data.position,
    description: data.description,
    start: data.start,
    end: data.end,
    location: data.location,
  });

  function updateEx(to, val) {
    const nd = {
      ...newEx,
      [to]: val,
    };
    setNewEx(nd);
  }

  function cancelEx() {
    setNewEx({
      company: data.company,
      position: data.position,
      description: data.description,
      start: data.start,
      end: data.end,
      location: data.location,
    });
  }

  function submitEx() {
    setData(exId, newEx);
  }

  const collapsedForm = (
    <div className="collapsedForm" onClick={() => setIsCollapsed(false)}>
      <p>{data.company}</p>
    </div>
  );

  // Returns collapsed if not shown else editable
  const inputForm = (
    <form className="experienceForm" onSubmit={(e) => e.preventDefault()}>
      <div className="labelAndInput">
        <label htmlFor="experienceCompany">Company</label>
        <input
          type="text"
          id="experienceCompany"
          defaultValue={newEx.company}
          onChange={(e) => {
            updateEx("company", e.target.value);
          }}
          maxLength={100}
        />
      </div>

      <div className="labelAndInput">
        <label htmlFor="experienceDetails">Position</label>
        <input
          type="text"
          id="experienceDetails"
          defaultValue={newEx.position}
          onChange={(e) => {
            updateEx("position", e.target.value);
          }}
          maxLength={100}
        />
      </div>

      <div className="labelAndInput">
        <label htmlFor="experienceDescription">Description</label>
        <textarea
          id="experienceDescription"
          defaultValue={newEx.description}
          onChange={(e) => {
            updateEx("description", e.target.value);
          }}
          maxLength={300}
        />
      </div>

      <div className="dateInputHolder">
        <div className="labelAndInput">
          <label htmlFor="experienceStartDate">Start Date</label>
          <input
            type="text"
            id="experienceStartDate"
            defaultValue={newEx.start}
            onChange={(e) => {
              updateEx("start", e.target.value);
            }}
            maxLength={10}
          />
        </div>

        <div className="labelAndInput">
          <label htmlFor="experienceEndDate">End Date</label>
          <input
            type="text"
            id="experienceEndDate"
            defaultValue={newEx.end}
            onChange={(e) => {
              updateEx("end", e.target.value);
            }}
            maxLength={10}
          />
        </div>
      </div>

      <div className="labelAndInput">
        <label htmlFor="experienceLocation">Location</label>
        <input
          type="text"
          id="experienceLocation"
          defaultValue={newEx.location}
          onChange={(e) => {
            updateEx("location", e.target.value);
          }}
          maxLength={100}
        />
      </div>

      <div className="formButtonHolder">
        <button
          type="button"
          className="deleteButton"
          onClick={() => {
            deleteData(exId);
            setIsCollapsed(true);
          }}
        >
          Delete
        </button>
        <button
          type="button"
          className="cancelButton"
          onClick={() => {
            cancelEx();
            setIsCollapsed(true);
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="submitButton"
          onClick={() => {
            submitEx();
            setIsCollapsed(true);
          }}
        >
          Save
        </button>
      </div>
    </form>
  );

  return isCollapsed ? collapsedForm : inputForm;
}

function ExperienceDetailsSection({ data, setData }) {
  function updateExperienceData(exId, newData) {
    const nd = {
      ...data,
    };
    nd.experience[exId] = newData;
    setData(nd);
  }

  function deleteExperienceData(exId) {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, index) => index !== exId),
    }));
  }

  function addExperienceData() {
    const nd = {
      ...data,
    };
    nd.experience.push({
      company: "NEW EX",
      position: "",
      description: "",
      start: "",
      end: "",
      location: "",
    });
    setData(nd);
  }

  return (
    <div id="experienceDetailsSection">
      <h1>Experience</h1>
      {data.experience.length > 0 && (
        <ul>
          {data.experience.map((d, i) => {
            return (
              <li key={crypto.randomUUID()}>
                <ExperienceForm
                  exId={i}
                  data={d}
                  setData={updateExperienceData}
                  deleteData={deleteExperienceData}
                />
              </li>
            );
          })}
        </ul>
      )}
      <button className="addButton" onClick={addExperienceData}>
        +
      </button>
    </div>
  );
}

function PersonalDetails({ data, setData }) {
  function handleChange(valToChange, newVal) {
    const nd = {
      ...data,
      [valToChange]: newVal,
    };
    setData(nd);
  }

  return (
    <div id="personalDetailsInput">
      <h1>Personal Details</h1>
      <label htmlFor="nameInput">Full Name</label>
      <input
        type="text"
        id="nameInput"
        onChange={(e) => {
          handleChange("fullName", e.target.value);
        }}
        defaultValue={data.fullName}
      />
      <label htmlFor="emailInput">Email</label>
      <input
        type="email"
        id="emailInput"
        onChange={(e) => {
          handleChange("email", e.target.value);
        }}
        defaultValue={data.email}
      />
      <label htmlFor="phoneNumberInput">Phone Number</label>
      <input
        type="tel"
        id="phoneNumberInput"
        onChange={(e) => {
          handleChange("phone", e.target.value);
        }}
        defaultValue={data.phone}
      />
      <label htmlFor="addressInput">Address</label>
      <input
        type="text"
        id="addressInput"
        onChange={(e) => {
          handleChange("address", e.target.value);
        }}
        defaultValue={data.address}
      />
    </div>
  );
}

function TotalInputScreen({ data, setData }) {
  return (
    <div id="totalInputScreen">
      <PersonalDetails data={data} setData={setData} />
      <EducationDetailsSection data={data} setData={setData} />
      <ExperienceDetailsSection data={data} setData={setData} />
    </div>
  );
}

export default TotalInputScreen;
