import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState("");
  const [şifre, setŞifre] = useState("");
  const { id } = useParams();

  useEffect(()=>{
    getProductById();
},);

const getProductById = async () =>{
const response = await axios.get(`http://localhost:5000/products/${26}`);
setEmail(response.data.email);
setŞifre(response.data.fullname);

const email = setEmail;
const password = setŞifre ;
}

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
        <Form style={{ width: 300, height: 450 }}>
          <Form.Group as={Col} controlId="formGridEmail" className="groupfrom">
            <Form.Label className="bg-transparent">Email</Form.Label>
            <Form.Control  value={email} type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="groupfrom " as={Col} controlId="formGridEmai">
            <Form.Label className="bg-transparent">ŞIFRE</Form.Label>
            <Form.Control  value={şifre} type="password" placeholder="Şifre " />
          </Form.Group>
          <div className="btn">
            <Button type="submit">Giriş Yap</Button>
          </div>
        </Form>
      </Row>
    </Container>
  );
}
export default LoginForm;
