import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom/dist";

 
  
  export default function ErrorPage({ message, onRetry }) {
    let navigate = useNavigate();

  function toHome() {
    navigate('/');
  }
    return (
      <Container fluid className="vh-100 d-flex justify-content-center align-items-center bg-light">
        <Row>
          <Col>
            <div className="text-center">
              <h1 className="mb-4">Oups ! Une erreur est survenue</h1>
              <p className="lead">{message}</p>
              <Container fluid className="d-flex justify-content-around align-items-center">
              <Button variant="primary" onClick={toHome}>
                Accueil
              </Button>
              <Button variant="primary" className="mr-3" onClick={onRetry}>
                Réessayer
              </Button>
              
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
