import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const ElectronicProduct = () => {
  const location = useLocation();
  const electronicProducts = location.state?.data?.electronicProducts || [];

  return (
    <>
      <Container>
        <h2 className="product_heading">Electronic Products</h2>
        <Row xs={1} md={5}>
          {electronicProducts.map((product, index) => (
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

export default ElectronicProduct;
