import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";
import CustomNavbar from "./CustomNavbar";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <CustomNavbar/>
      <Container className="mt-4">
        <Row className="text-center">
          <Col xs={12}>
            <h1 className="heading">Wallet Banking App</h1>
            <p className="description">
              Here you can recharge your wallet, transfer money, view your
              statement, and earn rewards.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={4} className="mb-3">
            <div className="clickable-card" onClick={() => navigate("/login")}>
              <h3>Recharge the wallet</h3>
              <p>Recharge your wallet with funds</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="clickable-card" onClick={() => navigate("/login")}>
              <h3>Transfer the wallet amount</h3>
              <p>Transfer wallet amount to another user</p>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <div className="clickable-card" onClick={() => navigate("/login")}>
              <h3>View account statement</h3>
              <p>View your account transaction history</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePage;
