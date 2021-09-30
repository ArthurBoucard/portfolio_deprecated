import React from 'react'
import bg from '../assets/header_bg.jpg'
import me from '../assets/me.jpeg'
import './Home.css';
import Navbar from './Navbar';
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
                <div class="container">
                    <div class="card">
                        <div class="card-header">
                        <img src={bomberman} alt="bomberman" />
                        </div>
                        <div class="card-body">
                        <div>
                            <span class="tag tag-red">Game</span>
                            <span class="tag tag-teal">Multiplayer</span>
                        </div>
                        <h4>
                            Bomberman
                        </h4>
                        <p>
                            A Bomberman with a local multiplayer gameplay, basic AI, power-ups, character customisation and a save system.
                        </p>
                        <div class="user">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="" target="_blank">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <div class="user-info">
                            <h5>C++ | Raylib</h5>
                            <small>Team of 5 - 1 month</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                        <img src={htop} alt="htop" />
                        </div>
                        <div class="card-body">
                        <div>
                            <span class="tag tag-light-purple">Application</span>
                        </div>
                        <h4>
                            HTop
                        </h4>
                        <p>
                            An application that shows information about your computer.
                        </p>
                        <div class="user">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="" target="_blank">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <div class="user-info">
                            <h5>C++ | SFML & NCurses</h5>
                            <small>Team of 4 - 3 days</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                        <img src={dante} alt="dante" />
                        </div>
                        <div class="card-body">
                        <div>
                            <span class="tag tag-green">algorithm</span>
                        </div>
                        <h4>
                            Dante's Star
                        </h4>
                        <p>
                            A maze generator and solver.
                        </p>
                        <div class="user">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="" target="_blank">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <div class="user-info">
                            <h5>C</h5>
                            <small>Solo - 2 weeks</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                        <img src={rpg} alt="rpg" />
                        </div>
                        <div class="card-body">
                        <div>
                            <span class="tag tag-red">Game</span>
                        </div>
                        <h4>
                            RPG
                        </h4>
                        <p>
                            A small rpg with a battle system, dialogues, cut scenes and a basic level-up system.
                        </p>
                        <div class="user">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="" target="_blank">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <div class="user-info">
                            <h5>C | CSFML</h5>
                            <small>Team of 4 - 2 weeks</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                        <img src={sokoban} alt="sokoban" />
                        </div>
                        <div class="card-body">
                        <div>
                            <span class="tag tag-red">Game</span>
                            <span class="tag tag-purple">puzzle</span>
                        </div>
                        <h4>
                            Sokoban
                        </h4>
                        <p>
                            A copy of the sokoban game that can be played in terminal.
                        </p>
                        <div class="user">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="" target="_blank">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <div class="user-info">
                            <h5>C | NCurses</h5>
                            <small>Solo - 2 weeks</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                        <img src={fractal} alt="fractal" />
                        </div>
                        <div class="card-body">
                        <div>
                            <span class="tag tag-green">algorithm</span>
                        </div>
                        <h4>
                            Fractal
                        </h4>
                        <p>
                            A small project that let you create your own fractal tree with different parameters.
                        </p>
                        <div class="user">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="" target="_blank">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <div class="user-info">
                            <h5>Pyhton | Turtle</h5>
                            <small>Solo - 1 day</small>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                        <img src={github} alt="github" />
                        </div>
                        <div class="card-body">
                        <div>
                            <span class="tag tag-pink">projects</span>
                        </div>
                        <h4>
                            More project on my GitHub
                        </h4>
                        <p>
                            More than 20 repositories
                        </p>
                        <div class="user">
                            <IconButton style={{color: "#FEFEFE"}} aria-label="go to github" href="" target="_blank">
                                <GitHubIcon fontSize="large" />
                            </IconButton>
                            <div class="user-info">
                            <h5>C | C++ | Python | HTML ...</h5>
                            <small></small>
                            </div>
                        </div>
                        </div>
                    </div>
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
