import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch('http://localhost:5000/api/products').then((response)=>{
    //   response.json().then((data)=>{
    //     setProducts(data)
    //   })
    // })
    const fetchedProducts = async () => {
      const { data } = await axios.get('http://localhost:5000/api/products');
      setProducts(data)
    }
    fetchedProducts()
  }, [])

  return (
    <>
      <Row>
        {products.map((product) => {
          return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        })}
      </Row>
    </>
  )
}

export default HomeScreen;