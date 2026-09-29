import React from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import Image from './components/Image';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Price';

const firstName = "ilyas";

function App() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg">
            <Image />
            <CardBody>
              <CardTitle tag="div">
                <Name />
              </CardTitle>
              <CardText>
                <Description />
              </CardText>
              <Price />
            </CardBody>
          </Card>
          <div className="text-center mt-4 p-3 bg-light rounded">
            <h5>
              Hello, {firstName ? firstName : "there!"}
            </h5>
          </div>
          {firstName && (
            <div className="text-center mt-3">
              <img 
                src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="rounded-circle"
                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
              />
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;