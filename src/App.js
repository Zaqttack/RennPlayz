import './App.css'
import {Row, Col, Card} from 'react-bootstrap';
import StreamAndChat from './StreamAndChat';
import FooterCards from './FooterCards';

function App() {
    return (
        <>
            <section id="landing">
                <div className="container">
                    <Row xl={1} lg={1} md={1} sm={1} xs={1}>
                        <Col>
                            <h1 id="welcome-title" className="text-center">
                                Welcome Gamers
                            </h1>
                        </Col>
                    </Row>
                    <Row xl={1} lg={1} md={1} sm={1} xs={1}>
                        <Col>
                            <StreamAndChat/>
                        </Col>
                    </Row>
                </div>
            </section>
            <FooterCards />
        </>
    );
}

export default App;
