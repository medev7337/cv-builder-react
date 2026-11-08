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
      <button onClick={addEducationData}>+</button>
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
      />
      <label htmlFor="emailInput">Email</label>
      <input
        type="email"
        id="emailInput"
        onChange={(e) => {
          handleChange("email", e.target.value);
        }}
      />
      <label htmlFor="phoneNumberInput">Phone Number</label>
      <input
        type="tel"
        id="phoneNumberInput"
        onChange={(e) => {
          handleChange("phone", e.target.value);
        }}
      />
      <label htmlFor="addressInput">Address</label>
      <input
        type="text"
        id="addressInput"
        onChange={(e) => {
          handleChange("address", e.target.value);
        }}
      />
    </div>
  );
}

function TotalInputScreen({ data, setData }) {
  return (
    <div id="totalInputScreen">
      <PersonalDetails data={data} setData={setData} />
      <EducationDetailsSection data={data} setData={setData} />
    </div>
  );
}

export default TotalInputScreen;
