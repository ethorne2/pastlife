import React from 'react';
/* imports for Bootstrap Card */
import Card from 'react-bootstrap/Card';
import {  useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function DefinitionCard() {

  const navigate = useNavigate();
  const sendtoAbout = () => {
      navigate('/about');
  }

    return (
      <div className='definition-card'>
        <Card style={{ width: '36rem' }}>
          <Card.Body>
          <Card.Title>re·in·car·na·tion</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">noun</Card.Subtitle>
            <Card.Text>
            the rebirth of a soul in a new body.
            </Card.Text>
            <Button variant="secondary" onClick={() => {sendtoAbout()}}>Visit our About page</Button>
          </Card.Body>
        </Card>
      </div>
);
}

export default DefinitionCard;