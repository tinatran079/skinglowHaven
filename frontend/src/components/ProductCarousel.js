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
    <Carousel pause="hover" style={{ backgroundColor: "#f2f1f0" }}>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link to={`/product/${product._id}`}>
            <div style={{ width: "400px", height: "600px", margin: "auto" }}>
              <Image
                src={product.image}
                alt={product.name}
                fluid
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <Carousel.Caption className="carousel-caption">
              <h2>
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
