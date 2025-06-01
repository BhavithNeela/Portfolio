// File: src/App.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter/dist/index';
 

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);
  

  return (
    <div className="animated-bg text-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top blur-nav">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">Bhavith Neela</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      
      <section id="home" className="section unified-bg text-white " s data-aos="fade-right" style={{height:'100vh',marginBottom:'180px'}}>
<div className="container d-flex flex-column-reverse flex-md-row align-items-center justify-content-between text-center text-md-start">
    <div className="text-md-start text-center">
      <h1 className="display-5 fw-bold">
 {' '}
  <span className="text-accent">
    <Typewriter
      words={[' Hello, I Bhavith Neela']}
      cursor
      cursorStyle="|"
      typeSpeed={100}
      delaySpeed={1000}
    />
  </span>
</h1>
      <p className="lead">Full Stack Java Developer passionate about building backend and web solutions.</p>
      <a href={process.env.PUBLIC_URL + './Bhavith_Neela_Resume.pdf'} className="btn btn-outline-light mt-3" download>Download Resume</a>
    </div>
<img
  src={process.env.PUBLIC_URL + './BhavithPhoto.jpg'}
  alt="Bhavith"
  className="img-fluid rounded-circle mt-4 mt-md-0"
  style={{
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    objectFit: 'cover'
  }}
/>
  </div>
</section>

      {/* Skills Section */}
     <section id="skills" className="section" data-aos="">
  <div className="container">
    <div className="row align-items-center">
      
      <div className="col-md-7">
        <div className="card-left">
          <h5>Skills</h5>
          <div className="row g-3">
            {['Java', 'Spring Boot', 'React.js', 'MySQL', 'HTML/CSS/JS', 'Git & Postman'].map((skill, i) => (
              <div key={i} className="col-6">
                <div className="p-2 bg-white text-dark text-center shadow-sm rounded">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-5 text-center">
        <img src="https://cdn-icons-png.flaticon.com/512/2721/2721265.png" alt="Skills" className="img-fluid" style={{ maxWidth: '200px' }} />
      </div>
    </div>
  </div>
</section>


      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-7">
              <div className="card-left">
                <h5>Projects</h5>
                <ul>
                  <li><strong>Random Number Guessing Game:</strong> HTML/CSS/JS based game using DOM.</li>
                  <li><strong>Instagram Replica:</strong> Login/Register UI using Bootstrap.</li>
                  <li><strong>Natours:</strong> Tour booking UI with JS logic and animation.</li>
                  <li><strong>Multivendor Platform:</strong> Seller management UI using JS + API.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Projects" className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="row align-items-center">
           
            <div className="col-md-7">
              <div className="card-left">
                <h5>Experience</h5>
                <p><strong>CodeBegun | Intern</strong> (Oct 2023 – Aug 2024)</p>
                <ul>
                  <li>Developed UI pages like IRCTC, Razorpay, APSRTC.</li>
                  <li>Worked with Spring Boot to build APIs.</li>
                  <li>Created dynamic, responsive mini-projects.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/2799/2799260.png" alt="Experience" className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <div className="row align-items-center">
           
            <div className="col-md-7">
              <div className="card-left">
                <h5>Education</h5>
                <ul>
                  <li><strong>B.Tech in CSE</strong>, St. Martin’s Engineering College (2019–2023) – CGPA: 7.25</li>
                  <li><strong>Intermediate (MPC)</strong>, Sri Chaitanya Junior College (2017–2019) – 87.7%</li>
                  <li><strong>SSC</strong>, SPR School of Excellence (2016–2017) – CGPA: 8.5</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="Education" className="img-fluid" style={{ maxWidth: '200px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="row align-items-center">
            
            <div className="col-md-7">
              <div className="card-left">
                <h5>Contact</h5>
                <p>
                  <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email" style={{ width: '20px', marginRight: '8px' }} />
                  Email: <a href="mailto:neelabhavith87@gmail.com">neelabhavith87@gmail.com</a>
                </p>
                <p>
                  <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" style={{ width: '20px', marginRight: '8px' }} />
                  LinkedIn: <a href="https://linkedin.com/in/neelabhavith" target="_blank" rel="noreferrer">linkedin.com/in/neelabhavith</a>
                </p>
                <p>
                  <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="github" style={{ width: '20px', marginRight: '8px' }} />
                  GitHub: <a href="https://github.com/BhavithNeela" target="_blank" rel="noreferrer">github.com/BhavithNeela</a>
                </p>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Contact" className="img-fluid" style={{ maxWidth: '180px' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
