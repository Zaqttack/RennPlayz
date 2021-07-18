import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stream from './Stream';
import Chat from "./Chat";
import Card from 'react-bootstrap/Card'
import StreamAndChat from "./StreamAndChat";
import {ListGroup} from "react-bootstrap";

function App() {
    return (
        <>
            <section id="landing">
                <div className="container">
                    <div className="row h-25">
                        <h1 id="welcome-title" className="col-xl-12 col-lg-12 col-md-12 text-center">
                            Welcome to RennPlayz.net
                        </h1>
                    </div>
                    <div className="row h-75">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <StreamAndChat/>
                        </div>
                        {/*<div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">*/}
                        {/*    <Stream />*/}
                        {/*</div>*/}
                        {/*<div className="col-xl-3 col-lg-3 hide-component">*/}
                        {/*    <Chat />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="row h-100">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <Card>
                                <Card.Header as="h5">Connect With Me!</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><Card.Link href="https://twitter.com/RennPlayz">Twitter</Card.Link></ListGroup.Item>
                                    <ListGroup.Item><Card.Link href="https://www.instagram.com/rennplayz/?hl=en">Instagram</Card.Link></ListGroup.Item>
                                    <ListGroup.Item><Card.Link href="https://www.youtube.com/channel/UCvt3gsczC5khNmP-R8oQAEw">Youtube</Card.Link></ListGroup.Item>
                                    <ListGroup.Item><Card.Link href="https://www.youtube.com/channel/UCBMfPOgGJGy_dwr3vFHUFIg">Youtube VODS</Card.Link></ListGroup.Item>
                                    <ListGroup.Item><Card.Link href="https://www.tiktok.com/@rennplayz?lang=en">TiKTok</Card.Link></ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
