import React from "react";
import "./App.css";
import profilePic from "./profile-pic.jpg"; // Ensure this path matches the location of your image

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <header className="intro">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="intro-text">
            <h1>Hi, I'm Bekalu!</h1>
            <p>
              I'm passionate about IT, development, and continuous learning.
              <br />
              <br />I completed my undergrad degree at
              <a
                href="https://ju.edu.et/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Jimma University
              </a>
              , specializing in Electrical Engineering. Then Earned my Masters
              degree at
              <a
                href="https://www.uni-rostock.de/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                University of Rostock
              </a>
              , specializing in IT specifically Natural Langauge processing
              (NLP).
              <br />
              <br />
              Currently I am a Computer Scinece graduate student at
              <a
                href="https://www.ndsu.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                North Dakota State University (NDSU)
              </a>
            </p>
            <br />
            <p>
              I enjoy working on Web-App developmenet using
              Python-Django-Postgre-React stack. I have a keen interest in AWS
              Cloud, Data Engineering/Analytics. In my spare time, I love to
              Hike and Bike.
            </p>
            <br />
            <p>
              You can find me on
              <a
                href="https://www.linkedin.com/in/btkh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                LinkedIn
              </a>
              , and
              <a
                href="https://github.com/BeTKH"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                GitHub
              </a>
              .
            </p>
          </div>
        </header>
        <main>
          {/* Other sections like Education, Certificates, Projects, Blogs go here */}
        </main>
      </div>
      <footer>
        <p>© 2024 [Your Name]</p>
      </footer>
    </div>
  );
}

export default App;
