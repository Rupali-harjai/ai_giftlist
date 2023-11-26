import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const BeautifulProduct = () => {
  const location = useLocation();
  const beautifulProducts = location.state?.data?.beautifulProducts || [];

  return (
    <>
      <Container>
        <h2 className="product_heading">Beautiful Products</h2>
        <Row xs={1} md={5}>
          {beautifulProducts.map((product, index) => (
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

export default BeautifulProduct;
