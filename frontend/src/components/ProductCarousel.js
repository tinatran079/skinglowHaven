import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Message from "./Message";
import Loader from "./Loader";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover">
      {products.map((product) => (
        <Carousel.Item key={product._id} style={{ padding: "20px" }}>
          <Link
            to={`/product/${product._id}`}
            style={{ textDecoration: "none", color: "#333" }}
          >
            <div
              style={{
                width: "100%",
                height: "60vh",
                margin: "auto",
                overflow: "hidden",
                padding: "20px",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fluid
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
            <Carousel.Caption
              className="carousel-caption"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <h2 style={{ color: "#fff", fontSize: "1.5rem" }}>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
