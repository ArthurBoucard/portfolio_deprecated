import React from 'react'
import bg from '../assets/header_bg.jpg'
import me from '../assets/me.jpeg'
import './Home.css';
import Navbar from './Navbar';
import ProjCard from './ProjCard';
import { BrowserRouter as Router } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import fractal from '../assets/project/fractal.png'
import bomberman from '../assets/project/bomberman.png'
import dante from '../assets/project/dante.png'
import sokoban from '../assets/project/sokoban.png'
import htop from '../assets/project/htop.png'
import rpg from '../assets/project/rpg.png'
import github from '../assets/project/github.png'
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CVIcon from '@mui/icons-material/Description';
import HeartIcon from '@mui/icons-material/Favorite';
import CV from '../assets/documents/ArthurBoucardCV.pdf'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Home = () => {
    return (
        <SimpleBar style={{ maxHeight: 1000000 }}>
        <div className="portfolio">
            <div id="top" className="header_container">
                <img className="Bg" src={bg} alt="background"></img>
                <div className="header_txt">Welcome to my<br></br>Portfolio</div>
            </div>
            <Router>
                <Navbar />
            </Router>
            <div className="parallax">
                <div className="about_div">
                    <h1 className="about" id="about">About me</h1>
                    <Avatar className="avatar"
                    alt="Me"
                    src={me}
                    sx={{ width: 120, height: 120 }}
                    />
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
                            title = "Bomberman"
                            desc = "My 2nd year last project, A Bomberman with a local multiplayer gameplay, basic AI, power-ups, character customisation and a save system."
                            lang = "C++ using Raylib"
                            team = "Team of 5 - 1 month"
                            img = {bomberman}
                            alt = "bomberman"
                            gitlink="https://github.com/ArthurBoucard/Bomberman-IndieStudio"
                        />
                        <ProjCard 
                            title = "HTop"
                            desc = "An application that shows information about your system."
                            lang = "C++ using SFML & NCurses"
                            team = "Team of 4 - 3 days"
                            img = {htop}
                            alt = "htop"
                            gitlink="https://github.com/ArthurBoucard/HTop"
                        />
                        <ProjCard 
                            title = "Dante's Star"
                            desc = "A maze generator and solver."
                            lang = "C"
                            team = "Solo - 2 weeks"
                            img = {dante}
                            alt = "dante"
                            gitlink="https://github.com/ArthurBoucard/Dante_Star"
                        />
                        <ProjCard 
                            title = "RPG"
                            desc = "A small rpg with combat, dialogues, cut scenes and a basic level-up system."
                            lang = "C usign CSFML"
                            team = "Team of 4 - 2 weeks"
                            img = {rpg}
                            alt = "rpg"
                            gitlink="https://github.com/ArthurBoucard/MyRPG"
                        />
                    </Stack>
                    <br></br>
                    <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={0}>
                        <ProjCard 
                            title = "Sokoban"
                            desc = "A copy of the sokoban game that can be played in terminal."
                            lang = "C with NCurses"
                            team = "Solo - 2 weeks"
                            img = {sokoban}
                            alt = "sokoban"
                            gitlink="https://github.com/ArthurBoucard/MySokoban"
                        />
                        <ProjCard 
                            title = "Fractal"
                            desc = "A small project that let you create your own fractal tree with different parameters."
                            lang = "Python using turtle"
                            team = "Solo - 1 day"
                            img = {fractal}
                            alt = "fractal"
                            gitlink="https://github.com/ArthurBoucard/Fractal_Tree"
                        />
                        <ProjCard 
                            title = "More projects on my GitHub"
                            desc = "More than 20 repositories"
                            lang = "C / C++ / Python / HTML..."
                            team = ""
                            img = {github}
                            alt = "github"
                            gitlink="https://github.com/ArthurBoucard"
                        />
                    </Stack>
                </div>
                <div className="contact_div">
                    <h1 id="contact">Contact</h1>
                    <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={5}>
                        <div className="contact_content">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="email" href="mailto:arthur.boucard@hotmail.fr" target="_blank">
                                <EmailIcon fontSize="large" />
                            </IconButton>
                            <h2>arthur.boucard@hotmail.fr</h2>
                        </div>
                        <div className="contact_content">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to linkedin" href="https://www.linkedin.com/in/arthur-boucard-786745198/" target="_blank">
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                            <h2>LinkedIn</h2>
                        </div>
                        <div className="contact_content">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="https://github.com/ArthurBoucard" target="_blank">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <h2>GitHub</h2>
                        </div>
                        <div className="contact_content">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href={CV} download="ArthurBoucardCV">
                                <CVIcon fontSize="large" />
                            </IconButton>
                            <h2>Download my CV</h2>
                        </div>
                    </Stack>
                    <div className="end_content">
                        <h4>Portfolio made by me using ReactJS with <HeartIcon fontSize="small" sx={{ color: "#FF4747" }} /></h4>
                    </div>
                </div>
            </div>
        </div>
        </SimpleBar>
    );
}

export default Home
