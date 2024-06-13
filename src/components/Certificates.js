import React from "react";

const Certificates = ({ certificates }) => {
  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div className="certificates-list">
        {certificates.map((cert, index) => (
          <img key={index} src={cert.logo} alt={`${cert.name} logo`} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
