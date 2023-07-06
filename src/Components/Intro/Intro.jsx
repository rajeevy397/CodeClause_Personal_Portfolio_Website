import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import boy2 from '../../img/1.png';
// import boy2 from '../../img/Rajeev.jpg';
import Crown from '../../img/crown.png';
import thumbup from '../../img/thumbup.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

function Intro() {
  const transition = { duration: 2, type: 'spring' };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hy! I Am</span>
          <span>Rajeev Yadav</span>
          <span>
            MERN Stack Developer with high level of experience in web designing
            and development, producing the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>

        <div className="i-icons">
          <a href="https://github.com/rajeevy397">
            <img src={Github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/rajeev-yadav-936853259/">
            <img src={LinkedIn} alt="linkedin" />
          </a>
          <a href="https://www.instagram.com/rajeevyadav__/?hl=en">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={boy2} alt="boy" />
        

        {/* animation */}
        <motion.img
          initial={{ left: '-36%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt="glassesimoji"
        />

        {/* animation */}
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '68%' }}
          transition={transition}
          style={{ top: '-4%', left: '68%' }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ top: '18rem', left: '9rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '18rem', left: '0rem' }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left: '-9rem',
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
