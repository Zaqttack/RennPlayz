import React from 'react';
import { Card, ListGroup } from "react-bootstrap";

const LinkedItem = ({itemName, itemLink}) => {
    return (
        <ListGroup.Item className="card-item">
            <Card.Link href={itemLink} target="_blank" className="card-link">
                <ListGroup.Item>{itemName}</ListGroup.Item>
            </Card.Link>
        </ListGroup.Item>
    );
};

export default LinkedItem;