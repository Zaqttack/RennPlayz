import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SocialCard from "./SocialCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const InformationCards = () => {
    return (
        <Container fluid="xl" className="margin-top margin-bottom">
            <Row xl={3} lg={3} md={3} sm={2} xs={2} className="justify-content-center">
                {/*<Col><SocialCard /></Col>*/}
            </Row>
        </Container>
    );
};

export default InformationCards;