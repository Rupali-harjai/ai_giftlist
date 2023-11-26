import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const GiftList = () => {
  const [data, setData] = useState(null);
  const [visibleCards, setVisibleCards] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from raw.json
    fetch("/raw.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const showMore = (productType) => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 5);

    // Navigate to different routes based on product type
    if (productType === "beautifulProducts") {
      navigate("/beautifulProduct", { state: { data } });
    } else if (productType === "toyProducts") {
      navigate("/toyProduct", { state: { data } });
    } else if (productType === "electronicProducts") {
      navigate("/electronicProduct", { state: { data } });
    } else if (productType === "babisProducts") {
      navigate("/babisProduct", { state: { data } });
    }
  };

  return (
    <>
      <Container className="giftlist_container">
        <h1>
          <span className="giftlist_genie">Genie</span>: AI Gift Ideas
        </h1>

        <div className="giftlist_info">
          <p className="giftlist_text">
            Recommend birthday gift ideas for my 55 year old mother. She likes
            pickleball, gardening, and a stiff cocktail. Keep it under $100.
          </p>
          <span>
            <svg
              className="giftlist_svg"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24.4229 9.99723C24.7782 10.7788 25.8883 10.7788 26.2436 9.99723L26.8447 8.67476C26.9448 8.45465 27.1212 8.27825 27.3413 8.1782L28.6638 7.57707C29.4454 7.2218 29.4454 6.11161 28.6638 5.75634L27.3413 5.15522C27.1212 5.05517 26.9448 4.87876 26.8447 4.65865L26.2436 3.33618C25.8883 2.55459 24.7782 2.55458 24.4229 3.33618L23.8218 4.65865C23.7217 4.87876 23.5453 5.05517 23.3252 5.15522L22.0027 5.75634C21.2211 6.11161 21.2211 7.2218 22.0027 7.57707L23.3252 8.1782C23.5453 8.27825 23.7217 8.45465 23.8218 8.67476L24.4229 9.99723Z"
                fill="white"
              />
              <path
                d="M26.2436 22.0028C25.8883 21.2213 24.7782 21.2213 24.4229 22.0028L23.8218 23.3253C23.7217 23.5454 23.5453 23.7218 23.3252 23.8219L22.0027 24.423C21.2211 24.7783 21.2211 25.8885 22.0027 26.2437L23.3252 26.8449C23.5453 26.9449 23.7217 27.1213 23.8218 27.3414L24.4229 28.6639C24.7782 29.4455 25.8883 29.4455 26.2436 28.6639L26.8447 27.3414C26.9448 27.1213 27.1212 26.9449 27.3413 26.8449L28.6638 26.2437C29.4454 25.8885 29.4454 24.7783 28.6638 24.423L27.3413 23.8219C27.1212 23.7218 26.9448 23.5454 26.8447 23.3253L26.2436 22.0028Z"
                fill="white"
              />
              <path
                d="M15.6746 12.8219C15.4545 12.7218 15.2781 12.5454 15.1781 12.3253L12.9103 7.33618C12.555 6.55458 11.4448 6.55458 11.0896 7.33618L8.82176 12.3253C8.72171 12.5454 8.54531 12.7218 8.3252 12.8219L3.33606 15.0897C2.55446 15.4449 2.55446 16.5551 3.33606 16.9104L8.3252 19.1782C8.54531 19.2782 8.72171 19.4547 8.82176 19.6748L11.0896 24.6639C11.4448 25.4455 12.555 25.4455 12.9103 24.6639L15.1781 19.6748C15.2781 19.4547 15.4545 19.2782 15.6746 19.1782L20.6638 16.9104C21.4454 16.5551 21.4454 15.4449 20.6638 15.0897L15.6746 12.8219ZM13.6617 17.1648C13.4414 17.2649 13.2648 17.4415 13.1647 17.6618L12.9104 18.2217C12.5553 19.0038 11.4445 19.0038 11.0894 18.2217L10.8351 17.6618C10.7351 17.4415 10.5585 17.2649 10.3381 17.1648L9.77821 16.9105C8.9962 16.5554 8.9962 15.4447 9.77821 15.0895L10.3381 14.8353C10.5585 14.7352 10.7351 14.5586 10.8351 14.3382L11.0894 13.7783C11.4445 12.9963 12.5553 12.9963 12.9104 13.7783L13.1647 14.3382C13.2648 14.5586 13.4414 14.7352 13.6617 14.8353L14.2216 15.0895C15.0036 15.4447 15.0036 16.5554 14.2216 16.9105L13.6617 17.1648Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <h6>
          Not liking these suggestion? Try again with more details or{" "}
          <span>get help from Genie.</span>
        </h6>
        <hr />
        {data && (
          <>
            {/* Beautiful Products */}
            <Row>
              <div className="giftlist_heading">
                <h2>1.Beauty gift basket</h2>
                {data.beautifulProducts.length > visibleCards && (
                  <Button
                    className="btn_showmore"
                    onClick={() => showMore("beautifulProducts")}
                  >
                    Show More
                  </Button>
                )}
              </div>
              {data.beautifulProducts
                .slice(0, visibleCards)
                .map((product, index) => (
                  <Col key={index}>
                    <ProductCard {...product} />
                  </Col>
                ))}
            </Row>

            {/* Toy Products */}

            <Row>
              <div className="giftlist_heading">
                <h2>2.Toy Products</h2>
                {data.toyProducts.length > visibleCards && (
                  <Button
                    className="btn_showmore"
                    onClick={() => showMore("toyProducts")}
                  >
                    Show More
                  </Button>
                )}
              </div>
              {data.toyProducts.slice(0, visibleCards).map((product, index) => (
                <Col key={index}>
                  <ProductCard {...product} />
                </Col>
              ))}
            </Row>

            {/*  Electronic Products*/}
            <Row>
              <div className="giftlist_heading">
                <h2>3.Electronic Products</h2>
                {data.toyProducts.length > visibleCards && (
                  <Button
                    className="btn_showmore"
                    onClick={() => showMore("electronicProducts")}
                  >
                    Show More
                  </Button>
                )}
              </div>
              {data.electronicProducts
                .slice(0, visibleCards)
                .map((product, index) => (
                  <Col key={index}>
                    <ProductCard {...product} />
                  </Col>
                ))}
            </Row>

            {/*         
            Babis Products */}
            <Row>
              <div className="giftlist_heading">
                <h2>4.Babis Products</h2>
                {data.toyProducts.length > visibleCards && (
                  <Button
                    className="btn_showmore"
                    onClick={() => showMore("babisProducts")}
                  >
                    Show More
                  </Button>
                )}
              </div>
              {data.babisProducts
                .slice(0, visibleCards)
                .map((product, index) => (
                  <Col key={index}>
                    <ProductCard {...product} />
                  </Col>
                ))}
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default GiftList;
