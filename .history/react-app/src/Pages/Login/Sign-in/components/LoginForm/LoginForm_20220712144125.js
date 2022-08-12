import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  let hatamessage;
  const [email, setEmail] = useState("");
  const [şifre, setŞifre] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/products/login`, {
        email: email,
        şifre: şifre,
      })
      .then(function (response) {
        if (response.status === 200) {
          hatamessage = response.data;
        } else {
          console.log("tekrar dene");
        }
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Link to={"/SignIn"} className=" btn">
            Giriş Yap
          </Link>
        </Col>

        <Col>
          <Link to={"/SignUp"} className=" btn">
            Yeniyim
          </Link>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5 mb-5">
        <div className="stage">
          <div className="wrapper">
            <div className="slash"></div>
            <div className="sides">
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
              <div className="side"></div>
            </div>
            <div className="text">
              <div className="text--backing">BUKYTALK</div>
              <div className="text--left">
                <div className="inner">BUKYTALK</div>
              </div>
              <div className="text--right">
                <div className="inner">BUKYTALK</div>
              </div>
            </div>
          </div>
        </div>
      </Row>

      <Row className="justify-content-center">
        <p>asdf</p>
        <Form onSubmit={Login} style={{ width: 300, height: 450 }}>
          <Form.Group as={Col} controlId="formGridEmail" className="groupfrom">
            <Form.Label className="bg-transparent">Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="groupfrom " as={Col} controlId="formGridEmai">
            <Form.Label className="bg-transparent">ŞIFRE</Form.Label>
            <Form.Control
              value={şifre}
              onChange={(e) => setŞifre(e.target.value)}
              type="password"
              placeholder="Şifre "
            />
          </Form.Group>
          <div className="btn">
            <button type="submit">Giriş Yap</button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
export default LoginForm;
