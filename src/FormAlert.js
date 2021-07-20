import React, { useState } from "react";
import { Alert, Button, Row, Col } from 'react-bootstrap';
import "./style/App.css"

function FormAlert ({ websiteRedirect, formTitle }) {
    const [show, setShow] = useState(true);
    // const websiteRedirect = "https://notionforms.io/forms/submit-your-effect-ideas-1";

    return (
        <Alert show={show} variant="primary">
            <Alert.Heading>Heyo Gamers!</Alert.Heading>
            <p>
                We're looking for plugin Ideas! If you have any, please head on over to
                this form and fill it out! Thanks for being awesome 😎
            </p>
            <Row>
                <Col className="d-flex justify-content-end">
                    <Button href={ websiteRedirect } variant="outline-primary" className="margin-right-small">
                        { formTitle }
                    </Button>
                    <Button onClick={() => setShow(false)} variant="outline-primary">
                        Close
                    </Button>
                </Col>
            </Row>
        </Alert>
    );
}

export default FormAlert;