import Iframe from "react-iframe";
function Map() {
  return (
    <Iframe
      src="https://www.google.com/maps/https://maps.gstatic.com/mapfiles/openhand_8_8.cur"
      width="100%"
      height="250"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
    ></Iframe>
  );
}
export default Map;

