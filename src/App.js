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
            <h1>Hi, I'm [Your Name]!</h1>
            <p>
              I'm passionate about IT, development, and continuous learning. I
              completed my degree at
              <a
                href="https://youruniversity.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Your University
              </a>
              , specializing in [Your Specialization].
            </p>
            <p>
              I enjoy working on projects related to [Your Interests] and have a
              keen interest in [Other Interests]. In my spare time, I love
              [Hobbies].
            </p>
            <p>
              You can find me on
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                LinkedIn
              </a>
              ,
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Twitter
              </a>
              , and
              <a
                href="https://github.com/yourprofile"
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
