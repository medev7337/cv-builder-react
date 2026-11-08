import "../styles/cvStyles.css";

function PersonalDetails({ data }) {
  return (
    <div id="personalDetailsSection">
      <h1>{data.fullName}</h1>
      <div>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.address}</p>
      </div>
    </div>
  );
}

function DetailCard({ start, end, location, title, details, desc }) {
  return (
    <div className="detailCard">
      <div>
        <p>
          {start} - {end}
        </p>
        <p>{location}</p>
      </div>
      <div>
        <p>{title}</p>
        <p>{details}</p>
        {desc && <p>{desc}</p>}
      </div>
    </div>
  );
}

function Education({ data }) {
  return (
    <div id="educationSection" className="detailsMainSection">
      <h2>Education</h2>
      <ul>
        {data.education.map((ed) => {
          return (
            <li key={crypto.randomUUID()}>
              <DetailCard
                start={ed.start}
                end={ed.end}
                location={ed.location}
                title={ed.school}
                details={ed.degree}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Experience({ data }) {
  return (
    <div id="experienceSection" className="detailsMainSection">
      <h2>Experience</h2>
      <ul>
        {data.experience.map((ex) => {
          return (
            <li key={crypto.randomUUID()}>
              <DetailCard
                start={ex.start}
                end={ex.end}
                location={ex.location}
                title={ex.company}
                details={ex.position}
                desc={ex.description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function CV({ data }) {
  return (
    <div id="cvSection">
      <div id="cvHolder">
        <PersonalDetails data={data} />
        <div id="mainSectionHolder">
          <Education data={data} />
          <Experience data={data} />
        </div>
      </div>
    </div>
  );
}

export default CV;
