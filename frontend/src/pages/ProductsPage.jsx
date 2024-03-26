import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';
import { Col, Row, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import Rating from '../components/Rating';
import { LinkContainer } from 'react-router-bootstrap';

const ProductsPage = () => {
  const { id } = useParams();
  const foundIndex = products.find((product) => product._id === id);

  if (!foundIndex) {
    return <p>Product not found</p>; // Handling NotFound case
  }

  return (
    <>
      <LinkContainer to='/'>
        <FaArrowLeft className='m-3 w-4 cursor-pointer'> Go Back</FaArrowLeft>
      </LinkContainer>
      <Row>
        <Col md={5}>
          <Image src={foundIndex.image} alt={foundIndex.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item as="div">{foundIndex.name}</ListGroup.Item>
            <ListGroup.Item><Rating value={foundIndex.rating} text={`${foundIndex.numReviews} reviews`} /></ListGroup.Item>
            <ListGroup.Item>${foundIndex.price}</ListGroup.Item>
            <ListGroup.Item>Description: {foundIndex.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card style={{ width: '18rem' }}>
            <ListGroup variant="flush">
              <ListGroup.Item className='flex justify-between'>Price: ${foundIndex.price}</ListGroup.Item>
              <ListGroup.Item className='flex justify-between'>Status: {foundIndex.countInStock !== 0 ? 'In Stock' : 'Out Of Stock'}</ListGroup.Item>
              <ListGroup.Item>
                <Button className='bg-sky-900' disabled={foundIndex.countInStock === 0}>
                  {foundIndex.countInStock !== 0 ? 'Add to Cart' : 'Out Of Stock'}
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductsPage;
