import React from 'react';
/* imports for Bootstrap Card */
import Card from 'react-bootstrap/Card';


function DefinitionCard() {
    return (
      <div className='definition-card'>
        <Card style={{ width: '36rem' }}>
          <Card.Body>
          <Card.Title>re·in·car·na·tion</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">noun</Card.Subtitle>
            <Card.Text>
            the rebirth of a soul in a new body.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
);
}

export default DefinitionCard;