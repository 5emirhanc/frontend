import Iframe from "react-iframe";
import "./Map.css";
function Map() {
  return (
    <Iframe className="map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12046.2760775105!2d29.1902073!3d40.9909172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xca9a48e6b8208687!2sKadak%20Metal!5e0!3m2!1str!2str!4v1602075390486!5m2!1str!2str"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
    ></Iframe>
  );
}
export default Map;