import React from "react";
import "./Footer.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Footer = () => (
<Container>
  <Row>
  <footer className="page-footer">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div >
          <h5 className="text-uppercase">BUKYTALK MOBİLYACILIK</h5>
          <p>
           Emirhan Çağman Tarafından Yapılan ve React ile FrontEnd, NodeJs ile Api , MongoDb ile Veritabanı Yapılarak Yazılmış Bir Web Sitesidir 
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      ©2022 Tüm gizlilik haklarına ait:
      <a href="https://bukytalk.com/">https://bukytalk.com/</a>
    </div>
  </footer>
  </Row>
</Container>
  
);

export default Footer;
