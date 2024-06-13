import React from "react";
import "./App.css";
import profilePic from "./profile-pic.jpg"; // Ensure this path matches the location of your image

/* add responsive nav bar 

- clicking to one of nav bar elements has scroll effect
- nav bar becomes 3 bar (humberger) on small screen (phone):
    - this nav bar closes when clicked elsewhere or itself 
    - this nav bar expands vertically (opens up nav lists down)
    - when opened the na bar 3 bars becomes X sign
- nav bar turns into side menu on Laptop screen
    - this side menu is open all the time
    - clicking on one of the side menus's has a scroll effect

- nav abr elements:
    - About : has small description text about me & social links (Git, Linkedin)
    - Education: University, country, Degree, GPA ( classes enjoyed under each uni)
    - Projects: Overview of projects & link to Git 
    - Experience: work experience 
    - Skills: Icon of tools & textual description of knowledge 
    - Trainings & Certifications: Udemy certs, DataCamp, AWS, Google, 

*/

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
              , specializing in Electrical and Computer Engineering (ECE). Then
              Earned my Masters degree at
              <a
                href="https://www.uni-rostock.de/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                University of Rostock
              </a>
              , specializing in IT (ML in Natural Langauge processing).
              <br />
              <br />
              Currently, I am a Computer Scinece graduate student at
              <a
                href="https://www.ndsu.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                North Dakota State University
              </a>
              .
            </p>
            <br />
            <p>
              I enjoy working on Web-App developmenet using
              Python-Django-Postgre-React. I have a keen interest in AWS Cloud,
              Databases, Data Engineering/Analytics, AI/ML especially NLP.
            </p>
            <br />
            <p>
              In my spare time, I love to Hike and Bike. You can find me on
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
        <p>© 2024 Bekalu Tadesse</p>
      </footer>
    </div>
  );
}

export default App;
