import Iframe from "react-iframe";
function Map() {
  return (
    <Iframe
      src="https://www.google.com/maps/place/Emir+Ak%C3%BC+Market/@41.0456461,28.8247215,15z/data=!4m5!3m4!1s0x0:0x329c8f017bea0ecc!8m2!3d41.0474143!4d28.8300696"
      width="100%"
      height="250"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
    ></Iframe>
  );
}
export default Map;