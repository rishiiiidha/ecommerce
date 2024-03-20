import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../products';
import { Col, Container, Row, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';

const ProductsPage = () => {
  const { id } = useParams();
  const foundIndex = products.find((product) => product._id === id);

  return (
    <>
      <Link className='btn btn-light my-3' to={'/'}> Go Back</Link>
      <Row>
        <Col md={5}>
          <Image src={foundIndex.image} alt={foundIndex.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            {/* flush border with no table */}
            <ListGroup.Item as="div">{foundIndex.name}</ListGroup.Item>
            <ListGroup.Item><Rating value={foundIndex.rating} text={foundIndex.numReviews} /></ListGroup.Item>
            <ListGroup.Item>${foundIndex.price}</ListGroup.Item>
            <ListGroup.Item>Description : {foundIndex.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item className='flex justify-between'><p>Price: </p>      ${foundIndex.price}</ListGroup.Item>
              <ListGroup.Item className='flex justify-between'><p>Status: </p>{foundIndex.countInStock !== 0 ? 'In Stock' : 'Out Of Stock'}</ListGroup.Item>
              <ListGroup.Item as='button'>
                {foundIndex.countInStock !== 0 ? <Button className='bg-sky-900'>Add to Cart</Button> : <Button disabled>Out Of Stock</Button>}
              </ListGroup.Item>
            </ListGroup>
          </Card>

        </Col>
      </Row>
    </>
  );
};

export default ProductsPage;
