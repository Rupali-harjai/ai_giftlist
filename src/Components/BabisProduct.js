import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import ProductCard from './ProductCard';
import Footer from './Footer';

const BabisProduct = () => {
  const location = useLocation();
  const babisProducts = location.state?.data?.babisProducts || [];

  return (
    <>
    <Container>
      <h2 className='product_heading'>Babies Products</h2>
      <Row xs={1} md={5}>
        {babisProducts.map((product, index) => (
          <Col key={index}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default BabisProduct;
