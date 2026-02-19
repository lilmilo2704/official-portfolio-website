import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex flex-column justify-content-between" style={{ minHeight: "300px" }}>
          <Col size={12}>
          </Col>
          <Col size={12} className="text-center">
            <h3>Thank you for your time 😁😁😁</h3>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/thien-bao-minh-dang-47a640299" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/angthienbaominh/" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="https://github.com/lilmilo2704" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p><strong>Get in touch via</strong></p>
            <p>Phone: +64 415855950 (Australia) / +84 352858208 (Vietnam)</p>
            <p>Email: dangthienbaominh@outlook.com</p>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
