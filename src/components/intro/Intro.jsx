import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>
          </div>
          <p>My full name is Tinotenda Musikavanhu, but professionally, I prefer to be addressed as Tino. My passion for software development emerged when I aspired to establish my own business. In this endeavor, I learned how to develop iOS applications and collaborated with a team of skilled professionals, including a senior engineer. This experience served as my initial exposure to the tech industry and sparked my curiosity to explore further. Over time, I immersed myself in multiple programming languages, and I was fortunate enough to share my knowledge with a vast audience of over 30,000 followers on social media platforms. What began as simple projects utilizing online resources transformed into personally gratifying work, and I even ventured into the realm of tutoring.
Overall, my journey into software development has been one of self-discovery, learning, and growth. I am confident that my experience, coupled with my passion for technology, has provided me with a solid foundation to excel in this field.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro