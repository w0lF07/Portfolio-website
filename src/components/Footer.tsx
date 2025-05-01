import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';  // Import Twitter icon
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/w0lF07" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/swastikdas7/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="https://x.com/x_w0LF07" target="_blank" rel="noreferrer"><TwitterIcon /></a> {/* Add Twitter icon */}
      </div>
    </footer>
  );
}

export default Footer;
