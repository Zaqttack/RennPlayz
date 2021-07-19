import React from 'react';
import { Row, Col } from "react-bootstrap";
import SocialCard from "./SocialCard";

const FooterCards = () => {
    return (
        <footer>
            <div className="container">
                <Row xl={3} lg={3} md={3} sm={2} xs={2}>
                    <Col><SocialCard /></Col>
                </Row>
            </div>
        </footer>
    );
};

export default FooterCards;