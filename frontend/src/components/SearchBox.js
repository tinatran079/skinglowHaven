import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const navigate = useNavigate();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || "");
  const [expanded, setExpanded] = useState(false);

  const toggleSearchBar = () => {
    setExpanded(!expanded);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword("");
      navigate(`/search/${keyword}`);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {!expanded ? (
        <span className="nav-link" onClick={toggleSearchBar}>
          <FaSearch />
        </span>
      ) : (
        <Form onSubmit={submitHandler} className="d-flex">
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            placeholder="Search Products..."
            className="mr-sm-2"
          />
          <span className="nav-link" onClick={submitHandler}>
            <FaSearch />
          </span>
        </Form>
      )}
    </>
  );
};
export default SearchBox;
