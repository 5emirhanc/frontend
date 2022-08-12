import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [şifre, setŞifre] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/products", {
      email: email,
      fullname: fullname,
      şifre: şifre,
    });
    navigate("/");
  };
  return (
    <Container>
      <Row>
        <Col className="btn">
          <Link to={"/SignIn"}>
            Giriş Yap
          </Link>
        </Col>

        <Col className="btn">
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

      <Row  className="justify-content-center">
        <Form  onSubmit={saveProduct}  style={{ width: 300, height: 450 }}>
          <Form.Group as={Col} controlId="formGridEmail" className="groupfrom">
            <Form.Label className="bg-transparent">Email</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail" className="groupfrom">
            <Form.Label className="bg-transparent">Fullname</Form.Label>
            <Form.Control
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              type="name"
              placeholder="fullname"
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
          <div>
            <button className="btn" >Kayıt ol</button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
export default LoginForm;
