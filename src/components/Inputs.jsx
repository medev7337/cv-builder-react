import "../styles/inputStyles.css";

function EducationForm() {
  // Returns collaped if not shown else editable
}

// 11/07/2026 - LEFT HERE
function EducationDetailsSection() {
  return (
    <div>
      <EducationForm />
      <button>Add</button>
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

export default PersonalDetails;
