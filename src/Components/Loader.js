import React from 'react'
import { Spinner } from 'react-bootstrap';
export default function Loader() {
  return (

    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="d-flex align-items-center">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </div>
    
  );
}

  
