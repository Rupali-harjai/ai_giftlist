import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({
  image,
  subtitle,
  title,
  price,
  typicalPriceRange,
  rating,
  starsGiven,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>

        <Card.Text>
          {rating}{" "}
          {Array.from({ length: rating }, (_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M9.51917 1.55498C9.60457 1.34966 9.89543 1.34966 9.98083 1.55498L11.8074 5.94655C11.8434 6.03311 11.9248 6.09225 12.0182 6.09974L16.7593 6.47983C16.981 6.4976 17.0708 6.77423 16.902 6.9189L13.2898 10.0131C13.2186 10.0741 13.1875 10.1698 13.2092 10.261L14.3128 14.8875C14.3644 15.1038 14.1291 15.2747 13.9393 15.1588L9.88031 12.6796C9.80031 12.6307 9.69969 12.6307 9.61969 12.6796L5.56067 15.1588C5.3709 15.2747 5.13559 15.1038 5.18718 14.8875L6.29077 10.261C6.31252 10.1698 6.28143 10.0741 6.21023 10.0131L2.59804 6.9189C2.42915 6.77423 2.51903 6.4976 2.7407 6.47983L7.48176 6.09974C7.57521 6.09225 7.65661 6.03311 7.69261 5.94655L9.51917 1.55498Z"
                fill="#FFA31A"
                stroke="#FFA31A"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          ))}
        </Card.Text>
        <Card.Text>
          $<strong>{price}</strong>
        </Card.Text>
        {typicalPriceRange && (
          <Card.Text className="text-muted" style={{ fontSize: "11px" }}>
            Typical range: {typicalPriceRange}
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
