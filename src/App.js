import './App.css'
import {Row, Col, Card} from 'react-bootstrap';
import StreamAndChat from './StreamAndChat';
import CardFooter from './CardFooter';

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
                    <Row>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <StreamAndChat/>
                        </div>
                    </Row>
                </div>
            </section>
            <CardFooter />
        </>
    );
}

export default App;
