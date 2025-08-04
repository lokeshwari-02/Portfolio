import React from "react";
import './App.css';
import codingimage from './images/main1.avif';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true      // animate only once
  });
}, []);
useEffect(() => {
  const revealCards = () => {
    const cards = document.querySelectorAll('.project-card');
    const windowHeight = window.innerHeight;

    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        card.classList.add('reveal');
      }
    });
  };

  window.addEventListener('scroll', revealCards);
  revealCards();

  return () => window.removeEventListener('scroll', revealCards);
}, []);

  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><a href="#about">👩‍💼 About</a></li>
          <li><a href="#skills">📊 Skills</a></li>
          <li><a href="#projects">💼 Projects</a></li>
          <li><a href="#contact">📧 Contact</a></li>
        </ul>
      </nav>

      <header className="hero-section">
        <div className="hero-left">
          <h1 className="name-highlight">Lokeshwari <span id="white">Devadula</span></h1>
          <p className="tagline">Crafting clean code with creativity 💡</p>
          <h2 className="roles-highlight">
           Aspiring Software Developer | Web Developer | Data Analyst
          </h2>
          <div className="cta-buttons" ><a href="/Portfolio/D_Lokeshwari.pdf" target="_blank" rel="noreferrer" className="btn btn outline">📁 View Resume</a>
            <a href="#contact" className="btn outline">📬 Contact Me</a>
          </div>
  <div className="social-icons">
  <a href="https://github.com/lokeshwari-02" target="_blank"  rel="noreferrer" title="GitHub">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="social-icon" />
  </a>
  <a href="https://linkedin.com/in/lokeshwari-devadula-o02102004/" target="_blank" rel="noreferrer" title="LinkedIn">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="social-icon white-icon " />
  </a>
  <a href="mailto:lokeshwaridevadula@gmail.com" title="Email">
    <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="social-icon" />
  </a>
</div>

        </div>
        <div className="hero-right">
           <img src={codingimage} alt="Coding Illustration" className="hero-image" />

                </div>
      </header>

  <section className="section" id="about">
  <h2>About Me</h2>
  <div className="about-content">
    <div className="about-left" data-aos="fade-right">
      <p>
        I'm a passionate Computer Science assionate about full-stack development, UI design, and Data analysis</p>
        <p>
      As an active IEEE member, I’ve organized tech events and outreach programs, combining technical expertise with impactful community engagement.
    </p>
    </div>

    <div className="about-right" data-aos="fade-left">
      <img
        src="https://i.postimg.cc/FsG3cxmz/img.jpg"
        alt="Lokeshwari"
        className="about-image"
      />
    </div>
  </div>
</section>



 <div className="skills-container" id="skills">
  <h2 className="title">Skills &<span id="white"> Technologies</span></h2>
  <div className="skill-row">
    <div className="skill-card">
      <h3>💻 Web Development</h3>
      <div className="skill-badges">
        <span>HTML</span><span>CSS</span><span>JavaScript</span><span>React</span><span>Node.js</span><span>Express.js</span><span>Bootstrap</span><span>jQuery</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🧠 Programming Languages</h3>
      <div className="skill-badges">
        <span>Python</span><span>Java</span><span>R</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🗄️ Databases</h3>
      <div className="skill-badges">
        <span>MongoDB</span><span>MySQL</span>
      </div>
    </div>
  </div>

  {/* Row 2: 2 Cards */}
  <div className="skill-row">
    <div className="skill-card">
      <h3>🛠️ Tools & Platforms</h3>
      <div className="skill-badges">
        <span>Git</span><span>Postman</span><span>VS Code</span><span>Eclipse</span><span>IntelliJ IDEA</span><span>Power BI</span><span>Excel</span>
      </div>
    </div>

    <div className="skill-card">
      <h3>🧩 Concepts</h3>
      <div className="skill-badges">
        <span>OOPS</span><span>DSA</span><span>REST APIs</span><span>SDLC</span><span>Agile</span><span>DBMS</span><span>Networks</span><span>OS</span>
      </div>
    </div>
  </div>
</div>
<section className="section" id="projects">
  <h2 className="title">My <span id="white">Projects</span></h2>

  <div className="project-stack">

    <div className="project-card left">
      <div className="project-content">
        <h3>💸 Expense Tracker</h3>
        <p><strong>Feb 2025 – Mar 2025</strong></p>
        <p>MERN stack app for tracking expenses with charts and dashboards.</p>
        <div className="tech-tags">
          <span>React</span><span>Node.js</span><span>MongoDB</span><span>Express</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/lokeshwari-02/Expense-Tracker">🔗 GitHub</a>
        </div>
      </div>
    </div>

    <div className="project-card right">
      <div className="project-content">
        <h3>🚀 HyperFlux</h3>
        <p><strong>Feb 2025</strong></p>
        <p>HyperFlux is an API request logging tool that helps developers track, analyze, and debug API interactions.</p>
        <div className="tech-tags">
          <span>JavaScript</span><span>HTML</span><span>React</span><span>Vite</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/lokeshwari-02/HyperFlux" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
        </div>
      </div>
    </div>

    <div className="project-card left">
      <div className="project-content">
        <h3>🍔 Hungry Hault</h3>
        <p><strong>April 2025</strong></p>
        <p>A sleek restaurant website to browse menus, book tables, and place takeaway or delivery orders. Includes user authentication,
           a 3D-themed landing page, and a modern responsive design.</p>
        <div className="tech-tags">
          <span>JavaScript</span><span>HTML</span><span>CSS</span></div>
        <div className="project-links">
          <a href="https://github.com/lokeshwari-02/Hungry_Hault" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
        </div>
      </div>
    </div>

    <div className="project-card right">
      <div className="project-content">
        <h3>📊 Sales Analysis</h3>
        <p><strong>Nov 2024</strong></p>
        <p>Used MySQL, Excel, and Power BI to analyze and visualize sales trends.</p>
        <div className="tech-tags">
          <span>MySQL</span><span>Power BI</span><span>Excel</span><span>DAX</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/lokeshwari-02/Sales_Analysis">🔗 GitHub</a>
        </div>
      </div>
    </div>

    <div className="project-card left">
      <div className="project-content">
        <h3>🎵 SQL Music Store Analysis</h3>
        <p><strong>May 2024</strong></p>
        <p>This SQL project is aimed at analyzing Music Store data to glean meaningful information that the company can use to further its 
          business such as promotional activities, stock up on popular artist/genre etc.</p>
        <div className="tech-tags">
          <span>JavaScript</span><span>HTML</span><span>React</span><span>Vite</span>
        </div>
        <div className="project-links">
          <a href="https://github.com/lokeshwari-02/SQL_Music_Store_Analysis" target="_blank" rel="noopener noreferrer">🔗 GitHub</a>
        </div>
      </div>
    </div>

  </div>
</section>
<section className="section" id="certifications">
  <h2 className="title"><span id="white">📜 Certifications</span></h2>
  <div className="cert-grid" >
    <div className="cert-card" data-aos="fade-up">
      <h3>ServiceNow – Certified System Administrator</h3>
      <a href="https://drive.google.com/file/d/17gQyI5DZaROPvdhH61g7bYi3muUkI7ib/view" target="_blank" rel="noreferrer" className="btn small">
        View Certificate
      </a>
    </div>

    <div className="cert-card" data-aos="fade-up" data-aos-delay="100">
      <h3>ServiceNow – Certified Application Developer</h3>
      <a href="https://drive.google.com/file/d/1Owkw55ofdeE6QIlx8Q8eaq0mcb10jshq/view" target="_blank" rel="noreferrer" className="btn small">
        View Certificate
      </a>
    </div>
  </div>
</section>



<section className="section" id="leadership">
  <h2><span className="title">Leadership</span> & <span id="white">Achievements</span></h2>

  <div className="highlight-grid">

    <div className="highlight-card">
      <h3>👩‍💼 Vice Chair – IEEE SB AU</h3>
      <p>Led branch-level operations, outreach events, and mentored peers.</p>
    </div>

    <div className="highlight-card">
      <h3>👩‍💻 Membership Lead – IEEE CS Chapter</h3>
      <p>Organized events like IEEE Day, UI Essentials, Cloud Computing, and Git sessions.</p>
    </div>

    <a className="highlight-card link-card" href="https://leetcode.com/u/Lokeshwari_02/" target="_blank" rel="noreferrer">
      <h3>🧠 LeetCode</h3>
      <p>Solved 200+ problems on LeetCode, building strong problem-solving and algorithmic skills.</p>
    </a>

    <a className="highlight-card link-card" href="https://www.hackerrank.com/profile/lokeshwari_" target="_blank" rel="noreferrer">
      <h3>🧪 HackerRank</h3>
      <p>I’ve earned certifications and skill badges on HackerRank, reflecting my strengths across multiple domains.
Highlights include Java (4⭐), Python (4⭐), SQL (3⭐), and relevant coding certifications</p>
    </a>


  </div>
</section>


<section className="section" id="contact">
  <h2><span className="title">Let's</span> <span id="white">Connect</span></h2>
  <p className="contact-intro">Open to collaborations, and meaningful conversations ✨</p>

  <div className="contact-cards">
    <a href="mailto:lokeshwaridevadula@gmail.com" className="contact-card" target="_blank">
      ✉️ lokeshwaridevadula@gmail.com
    </a>
    <a href="https://www.linkedin.com/in/lokeshwari-devadula-o02102004/" className="contact-card" target="_blank">
      💼 LinkedIn Profile
    </a>
    <a href="https://github.com/lokeshwari-02" className="contact-card" target="_blank">
      🐙 GitHub Portfolio
    </a>
  </div>
</section> 
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Lokeshwari Devadula. All rights reserved.</p>
      </footer>
    </div>
  );
  
}