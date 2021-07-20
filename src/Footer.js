import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Container, Row } from "react-bootstrap";
import './style/Footer.css'

const Footer = () => {
    return (
        <footer>
            <Container fluid="xl" className="margin-top margin-bottom">
                <Row className="justify-content-center">
                    <SocialIcon url="https://discord.gg/2HhHrN4CzT" className="footer-social" fgColor="#fff" bgColor="#ff94eb"/>
                    <SocialIcon url="https://twitter.com/RennPlayz" className="footer-social" fgColor="#fff" bgColor="#ff94eb"/>
                    <SocialIcon url="https://www.instagram.com/rennplayz/?hl=en" className="footer-social" fgColor="#fff" bgColor="#ff94eb"/>
                    <SocialIcon url="https://www.youtube.com/channel/UCvt3gsczC5khNmP-R8oQAEw" className="footer-social" fgColor="#fff" bgColor="#ff94eb"/>
                    <SocialIcon url="https://www.youtube.com/channel/UCBMfPOgGJGy_dwr3vFHUFIg" className="footer-social" fgColor="#fff" bgColor="#ff94eb"/>
                    <SocialIcon url="https://www.tiktok.com/@rennplayz?lang=en" className="footer-social" fgColor="#fff" bgColor="#ff94eb"/>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;