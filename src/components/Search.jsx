import React from "react";
import { Form, Container, Col, Button } from "react-bootstrap";
import "../App.css";

export default function Search(props) {
  const [search, setSearch] = React.useState("");

  const handleSubmit = (e) => props.getPokemon(search);

  return (
    <Container>
      <Form className="mt-2">
        <Form.Row className="align-items-center">
          <Col sm={10} className="my-1">
            <Form.Control
              className="responsive"
              style={{
                borderRadius: "100px",
                marginLeft: "80px",
                backgroundColor: "#ffffff",
                border: "none",
                boxShadow: "0px 0px 60px rgba(184, 184, 184, 0.461)",
                padding: "30px",
              }}
              size="lg"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for Pokemon"
            />
          </Col>
          <Col sm={2} className="my-1">
            <Button
              block
              onClick={handleSubmit}
              style={{
                borderRadius: "100px",
                color: "#ffffff",
                marginLeft: "-100px",
                backgroundColor: "#ff0077",
                border: "none",
                boxShadow: "0px 0px 60px rgba(184, 184, 184, 0.461)",
                padding: "15px",
              }}
              size="lg"
            >
              Search
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </Container>
  );
}
