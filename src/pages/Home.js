import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from '@material-ui/icons/Description';
import Link from "@material-ui/core/Link";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

import "../styles/Home.css";

function Home() {
  return (
  <div className="home">
    <div className="about">
      <h2 class="name"> {name()}</h2>
      <div className="prompt"> 
        <motion.div
            transition={{delay: 0.5, duration: 0.5}}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
        >
          <p>
            An up and coming software engineer going into his 3rd year of BSc (Hons) Computer Science @ King's College London
          </p>
        </motion.div>
        <motion.div
            transition={{delay: 1, duration: 0.5}}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
        >
          <Link href="https://www.linkedin.com/in/matthew-palmer-work/" target="_blank">
            <LinkedInIcon />
          </Link>
          <Link href="https://github.com/MPalmer8" target="_blank">
            <GitHubIcon />
          </Link>
          <Link href="/download/matthew-palmer-cv.pdf" target="_blank" download><DescriptionIcon /></Link>
        </motion.div>
      </div>
    </div>
    <motion.div
        transition={{delay: 0.05, duration: 0.5}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y:0},
          hidden: { opacity: 0, y: 20}
        }}
    >
      <div className="skills">
        <h1>About</h1>
      </div>
    </motion.div>
    <div className="aboutme">
      <motion.div
        transition={{delay: 0.05, duration: 0.8}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y:0},
          hidden: { opacity: 0, y: 20}
        }}
      >
        <div className="aboutmebox">
          <h2>About me</h2>
          <p>My name is Matthew, I am about to go into my 3rd year of university studies embarking on a BSc Computer Science course at my chosen university of King's College London, or KCL for short. I have a keen passion for technology and software engineering which has led me to create projects and gain various experiences within the sector.</p>
          <p>Throughout my educational career, and in my free time, I have embarked on and completed many projects. Many of them can be found on my <Link href="/projects">Projects</Link> page. They have helped me learn, and put into a practice, a wealth of skills, which have been listed on my skills section. I also have pages for my <Link href="/experience">Experience</Link>, and <Link href="/education">Education</Link>. </p>
          <p>When I am not completing university assignments or coding, I enjoy spending my free time doing various other activities. One of these activities is playing video games; I joined KCL's Gaming and E-Sports society where I compete in <Link href="https://thenuel.com/" target="_blank">NUEL</Link> and <Link href="https://www.nse.gg/" target="_blank">NSE</Link> tournaments by being a member and captain of one of KCL's various Rocket League teams, this has allowed me to follow one of my other passions whilst being in an environment where I can learn more about leadership, collaboration, teamwork, analysis, and determination. I currently have a spot on the committee of this society, where I am in charge of the Minecraft portion of the society where I host events and generally collaborate with others.</p>
          <p>Another way that I enjoy spending my free time is by watching TV shows and Movies, with Avatar the Last Airbender, Interstellar, Marvel, and Star Wars being amongst my favourite. I occasionally take part in sports such as Badminton and Table Tennis, but my go-to physical activity to feel refreshed is walking.</p>
        </div>
      </motion.div>
      <motion.div
        transition={{delay: 0.05, duration: 0.8}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y:0},
          hidden: { opacity: 0, y: 20}
        }}
      >
      <div className="skillsbox">
        <h2>Skills</h2>
        <p>I have had experience with various programming languages and technologies, including:</p>
        <p>
          <ul>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>Visual Basic</li>
            <li>PHP</li>
            <li>C++</li>
            <li>Scala</li>
            <li>JavaScript</li>
            <li>Django</li>
            <li>React</li>
            <li>SQL</li>
          </ul>
        </p>
      </div>
      </motion.div>
    </div>
  </div>
  );
}

function name() {
  return (
    <TypeAnimation
      sequence={[
        'Hi, My Name is Matthew Palmer'
      ]}
      wrapper="span"
      speed={30}
    />
  );
}


export default Home