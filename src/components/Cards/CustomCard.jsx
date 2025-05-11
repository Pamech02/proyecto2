import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CustomCard.scss'

export const CustomCard = ({ id, name, description, dueDate, onRemove }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text><strong>Due Date:</strong> {dueDate}</Card.Text>
        <Button variant="danger" onClick={() => onRemove(id)}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};