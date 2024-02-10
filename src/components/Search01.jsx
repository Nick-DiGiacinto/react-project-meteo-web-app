import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Search01 = ({ onSubmit }) => {
  const [cityInputValue, setCityInputValue] = useState("");
  const [countryCodeInputValue, setCountryCodeInputValue] = useState("");

  const handleCityInput = (e) => {
    setCityInputValue(e.target.value);
  };

  const handleCountryInput = (e) => {
    setCountryCodeInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cityInputValue, countryCodeInputValue);
  };

  return (
    <Form className="mb-5" onSubmit={handleSubmit}>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Insert city name here"
            value={cityInputValue}
            onChange={handleCityInput}
            className="mr-sm-2"
          />
          <Form.Control
            type="text"
            placeholder="Insert country name here"
            value={countryCodeInputValue}
            onChange={handleCountryInput}
            className="mr-sm-2"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" variant="light">
            <i class="bi bi-search"></i>
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search01;