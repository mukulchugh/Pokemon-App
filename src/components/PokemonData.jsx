import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";

export default function PokemonData(props) {
  return (
    <Container className="mt-3">
      <Row>
        <Col
          xs={12}
          md={6}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "20px 0px 0px 20px",
            boxShadow: "0px 0px 60px rgba(184, 184, 184, 0.461)",
          }}
        >
          <Card
            style={{
              border: "none",
            }}
          >
            <Card.Header
              style={{
                border: " none",
                backgroundColor: "#ffffff",
              }}
            >
              <h5>{props.name}</h5>
              <img width="160px" src={props.sprite} alt={props.name} />
            </Card.Header>
            <Card.Body>
              <h5>Abilities</h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {props.abilities.map((ability, key) => (
                  <div
                    style={{
                      backgroundColor: "#007bff",
                      color: "#ffffff",
                      margin: "5px",
                      display: "flex",
                      flexDirection: "row",
                      padding: "15px",
                      alignItems: "center",
                      borderRadius: "100px",
                      boxShadow: "0px 0px 60px rgba(184, 184, 184, 0.461)",
                    }}
                    key={key}
                  >
                    <span>{ability.ability.name}</span>
                  </div>
                ))}
              </div>

              <h5>Types</h5>
              <div>
                {props.types.map((type, key) => (
                  <div
                    style={{
                      backgroundColor: "#ff0077",
                      color: "#ffffff",
                      margin: "5px",
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px",
                      alignItems: "center",
                      borderRadius: "100px",
                      boxShadow: "0px 0px 60px rgba(184, 184, 184, 0.461)",
                    }}
                    key={key}
                  >
                    <span>{type.type.name}</span>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={12}
          md={6}
          style={{
            marginLeft: "-10px",
            backgroundColor: "#ffffff",
            borderRadius: "0px 20px 20px 0px",
            boxShadow: "0px 0px 60px rgba(184, 184, 184, 0.461)",
          }}
        >
          <Card
            style={{
              backgroundColor: "#ffffff",
              border: "none",
            }}
          >
            <Card.Body>
              <h4>Pokemon Stats</h4>
              {props.stats.map((stat, key) => (
                <div key={key}>
                  <strong>{stat.stat.name}</strong>
                  <ProgressBar
                    style={{
                      borderRadius: "20px",
                      margin: "5px",
                    }}
                    now={stat.base_stat}
                    max={255}
                    label={stat.base_stat}
                  />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
