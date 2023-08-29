import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from '@material-ui/icons/Description';
import Link from "@material-ui/core/Link";
import "../styles/Footer.css";



function Footer() {
  return <div className="footer">
    <div className="socialMedia">
        <Link href="https://www.linkedin.com/in/matthew-palmer-2601b121a/" target="_blank">
          <LinkedInIcon />
        </Link>
        <Link href="https://github.com/MPalmer8" target="_blank">
          <GitHubIcon />
        </Link>
        <Link href="/download/matthew-palmer-cv.pdf" target="_blank"><DescriptionIcon /></Link>
    </div>
    <p> &copy; 2023 Matthew Palmer</p>
  </div>;
}

export default Footer