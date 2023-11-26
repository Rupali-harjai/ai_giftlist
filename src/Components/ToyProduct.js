import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const ToyProduct = () => {
  const location = useLocation();
  const toyProducts = location.state?.data?.toyProducts || [];

  return (
    <>
      <Container>
        <h2 className="product_heading">Toy Products</h2>
        <Row xs={1} md={5}>
          {toyProducts.map((product, index) => (
            <Col key={index}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ToyProduct;
