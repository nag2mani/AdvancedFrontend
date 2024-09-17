import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';


const FAQ = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            How long does it take to build a website?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            Websites can range so much in terms of content and complexity that it is impossible to answer directly without knowing the details. Don't worry, I will give you the estimated timeline for both design and development work before every project. But usually, it takes from 1 - 4 weeks.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            How much does a project cost?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            The cost of a project depends on the scope, design complexity, and the number of features needed. I can provide you with a detailed quote after discussing your requirements.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            What services do you offer exactly?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            I offer a full range of design and development services, including website design, UX/UI design, custom illustrations, and web development with clean, scalable code.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="3">
            What if I have the website designed but need development only?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="3">
          <Card.Body>
            No problem at all! I can take care of the development part and bring your design to life with clean, efficient code.
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="4">
            Can you create custom illustrations, icons or mockups for me?
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="4">
          <Card.Body>
            Absolutely! I can provide you with custom illustrations, icons, or mockups to enhance your brand and website.
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default FAQ;
