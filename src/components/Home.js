import React from 'react'
import bg from '../assets/header_bg.jpg'
import './Home.css';
import Navbar from './Navbar';
import ProjCard from './ProjCard';
import { BrowserRouter as Router } from 'react-router-dom';
import fractal from '../assets/project/fractal.png'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CVIcon from '@mui/icons-material/Description';
import CV from '../assets/documents/ArthurBoucardCV.pdf'

const Home = () => {
    return (
        <div className="portfolio">
        <div id="top" className="header_container">
            <img className="Bg" src={bg} alt="background"></img>
            <div className="header_txt">Welcome to my<br></br>Portfolio</div>
        </div>
        <Router>
            <Navbar />
        </Router>
        <div className="about_div">
            <h1 className="about" id="about">About</h1>
            <p className="p_about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="projects_div">
            <h1 id="projects">Projects</h1>
            <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={0}>
            <ProjCard 
                title = "Fractal"
                desc = "A small project that let you create your own fractal tree."
                img = {fractal}
                alt = "fractal"
                gitlink="https://github.com/ArthurBoucard/Fractal_Tree"
                runlink="/Terminal"
            />
            <ProjCard 
                title = "Fractal"
                desc = "A small project that let you create your own fractal tree."
                img = {fractal}
                alt = "fractal"
                gitlink="https://github.com/ArthurBoucard/Fractal_Tree"
                runlink=""
            />
            <ProjCard 
                title = "Fractal"
                desc = "A small project that let you create your own fractal tree."
                img = {fractal}
                alt = "fractal"
                gitlink="https://github.com/ArthurBoucard/Fractal_Tree"
                runlink=""
            />
            <ProjCard 
                title = "Fractal"
                desc = "A small project that let you create your own fractal tree."
                img = {fractal}
                alt = "fractal"
                gitlink="https://github.com/ArthurBoucard/Fractal_Tree"
                runlink=""
            />
            </Stack>
        </div>
        <div className="contact_div">
            <h1 id="contact">Contact</h1>
            <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={5}>
                <div className="contact_content">
                    <IconButton style={{color: "#FEFEFE"}} aria-label="email" href="mailto:arthur.boucard@hotmail.fr" target="_blank">
                        <EmailIcon />
                    </IconButton>
                    <h2>arthur.boucard@hotmail.fr</h2>
                </div>
                <div className="contact_content">
                    <IconButton style={{color: "#FEFEFE"}} aria-label="go to linkedin" href="https://www.linkedin.com/in/arthur-boucard-786745198/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                    <h2>LinkedIn</h2>
                </div>
                <div className="contact_content">
                    <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="https://github.com/ArthurBoucard" target="_blank">
                        <GitHubIcon />
                    </IconButton>
                    <h2>GitHub</h2>
                </div>
                <div className="contact_content">
                    <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href={CV} download="ArthurBoucardCV">
                        <CVIcon />
                    </IconButton>
                    <h2>Download my CV</h2>
                </div>
            </Stack>
        </div>
        </div>
    );
}

export default Home
