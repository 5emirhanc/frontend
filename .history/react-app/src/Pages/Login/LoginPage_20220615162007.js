import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SignInPage from "./Sign-in/Sign-inPage"
import SignUpPage from "./Sign-up/Sign-upPage";
function SingIn() {
  return (
    <Container fluid>
      <Row>
       <SignUpPage/>
      </Row>
     
    </Container>
  );
}

export default SingIn;
