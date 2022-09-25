
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import ReactDOM from "react-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

import cardData from "./cardData";

function Campaigns() {

    const posts = [
        {
            title: "Kenya School",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            perc: 45
        },
        {
            title: "Nepal School",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            perc: 60
        },
        {
            title: "Somr Random School somewhere in the world",
            img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
            content: "react tailwind css card with image It is a long established fact that a reader will be distracted by the readable content",
            perc: 90
        }
    ];


    return (
        <>

            <Navbar/>
            <div>
                <h1>Welcome Mohammad!</h1>
            </div>

<Row xs={1} md={2} className="g-4">
      {posts.map((items, key) =>(
        <Col>
          <Card key={key}>
            <Card.Img variant="top" src={items.img} />
            <ProgressBar variant="success" animated now={items.perc} label={`${items.perc}%`}/>

            <Card.Body>
              <Card.Title>{items.title}</Card.Title>
              <Card.Text>
                {items.content}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago. 120 Donations Raised!</small>
        </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>

    </>
    )
}

export default Campaigns;


