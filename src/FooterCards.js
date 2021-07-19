import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SocialCard from "./SocialCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterCards = () => {
    return (
        <footer>
            <Container fluid="xl" className="margin-top margin-bottom">
                <Row xl={3} lg={3} md={3} sm={2} xs={2}>
                    <Col><SocialCard /></Col>
                </Row>
            </Container>
        </footer>
    );
};

export default FooterCards;