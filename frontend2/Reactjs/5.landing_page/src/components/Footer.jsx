import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
    return (
        <div className='footer-component'>
            <div className='footer-component-1'>
                <span>About</span>
                <span>Projects</span>
                <span>FAQs</span>
            </div>
            <div class="footer-component-2">
                <a href="https://www.linkedin.com" target="_blank"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.youtube.com" target="_blank"><i class="bi bi-youtube"></i></a>
                <a href="https://www.instagram.com" target="_blank"><i class="bi bi-instagram"></i></a>
            </div>

        </div>
    )
}

export default Footer;