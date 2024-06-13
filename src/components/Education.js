import React from "react";

const Education = ({ educations }) => {
  return (
    <section id="education">
      <h2>Education</h2>
      {educations.map((edu, index) => (
        <div key={index} className="education-item">
          <img src={edu.logo} alt={`${edu.university} logo`} />
          <div>
            <h3>{edu.university}</h3>
            <p>{edu.degree}</p>
            <p>GPA: {edu.gpa}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Education;
