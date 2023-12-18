import { Row, Col, Image, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import ProductCarousel from "../components/ProductCarousel";

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });

  return (
    <>
      {!keyword ? (
        <div style={{ position: "relative", textAlign: "left" }}>
          <Image
            src="/images/banner.png"
            alt="skincare"
            style={{
              width: "100%",
              // height: "600px",
              objectFit: "cover",
              marginBottom: 0,
              imageRendering: "auto",
              opacity: 0.95,
            }}
          />
          <h2 style={{ marginTop: "0" }}>Best Sellers</h2>
          <ProductCarousel />
        </div>
      ) : (
        <Link to="/" className="btn btn-light mb-2">
          Go Back
        </Link>
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h2 style={{ marginTop: "10px" }}>Latest Products</h2>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
