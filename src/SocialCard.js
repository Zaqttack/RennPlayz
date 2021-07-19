import React from 'react';
import { Card, ListGroup } from "react-bootstrap";
import LinkedItem from "./LinkedItem";

const SocialCard = () => {
    return (
        <Card className="card-header-color">
            <Card.Header as="h5">Follow Me!</Card.Header>
            <ListGroup variant="flush">
                <LinkedItem itemName="Discord" itemLink="discord.gg/2HhHrN4CzT"></LinkedItem>
                <LinkedItem itemName="Twitter" itemLink="https://twitter.com/RennPlayz"></LinkedItem>
                <LinkedItem itemName="Instagram" itemLink="https://www.instagram.com/rennplayz/?hl=en"></LinkedItem>
                <LinkedItem itemName="Youtube" itemLink="https://www.youtube.com/channel/UCvt3gsczC5khNmP-R8oQAEw"></LinkedItem>
                <LinkedItem itemName="Youtube VODS" itemLink="https://www.youtube.com/channel/UCBMfPOgGJGy_dwr3vFHUFIg"></LinkedItem>
                <LinkedItem itemName="TiKTok" itemLink="https://www.tiktok.com/@rennplayz?lang=en"></LinkedItem>
            </ListGroup>
        </Card>
    );
};

export default SocialCard;