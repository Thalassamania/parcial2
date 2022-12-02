import Card from 'react-bootstrap/Card';
//No me funciono la otra card por img

function detailedBand(band){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={band.image}/>
      <Card.Body>
        <Card.Title>{band.name}</Card.Title>
        <Card.Text>
          {band.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default detailedBand;