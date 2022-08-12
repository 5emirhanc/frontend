import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function LoginForm() {
  const [email, setTitle] = useState("");
  const [fullname, setPrice] = useState("");
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/products',{
        email:email,
        fullname:fullname
    });
    navigate('/');
    
  }
  return (
    <Container>
    <Row>
      <Col>
          <Link to={"/SignIn"} className="btn2 btn">Giriş Yap</Link>
      </Col>

      <Col>
      <Link to={"/SignUp"} className="btn2 btn">Yeniyim</Link>

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
        <Form onSubmit={ saveProduct} style={{ width: 300, height: 450 }}>
          <Form.Group as={Col} controlId="formGridEmail" className="groupfrom">
            <Form.Label className="bg-transparent">Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
          
          <Form.Group as={Col} controlId="formGridEmail" className="groupfrom">
            <Form.Label className="bg-transparent">ISIM SOYISIM</Form.Label>
            <Form.Control type="email" placeholder="İsim Soyisim" />
          </Form.Group>


          <Form.Group className="groupfrom " as={Col} controlId="formGridEmai">
            <Form.Label className="bg-transparent">ŞIFRE</Form.Label>
            <Form.Control type="password" placeholder="Şifre " />
          </Form.Group>
          <div className="btn">
            <Button type="submit">Kayıt Ol</Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
export default LoginForm;
