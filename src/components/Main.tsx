import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';  // Import Twitter icon
import '../assets/styles/Main.scss';
import Avatar from '../assets/images/Profile-pic2.jpg';  // Import your local image

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/w0lF07" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/swastikdas7/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://x.com/x_w0LF07" target="_blank" rel="noreferrer"><TwitterIcon /></a> {/* Add Twitter icon */}
          </div>
          <h1>Swastik Das</h1>
          <p>Data Analyst</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/w0lF07" target="_blank" rel="noreferrer"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/swastikdas7/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://x.com/x_w0LF07" target="_blank" rel="noreferrer"><TwitterIcon /></a> {/* Add Twitter icon */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
