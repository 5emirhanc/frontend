import Iframe from "react-iframe";
function Map() {
  return (
    <Iframe
      src="https://www.google.com/maps/place/Bilgiyi+Ticarile%C5%9Ftirme+Merkezi/@41.0564475,28.9975231,18.82z/data=!4m5!3m4!1s0x14cab9ec0e422ee9:0xe48bbf2454159e09!8m2!3d41.0567479!4d28.9983937"
      width="100%"
      height="250"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
    ></Iframe>
  );
}
export default Map