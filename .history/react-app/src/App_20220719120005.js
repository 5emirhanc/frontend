import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/aboutUsPage/aboutUsPage"     
import SignIn from "./Pages/Login/Sign-in/Sign-inPage";
import SignUp from "./Pages/Login/Sign-up/Sign-upPage";
import LoginHomePage from "./LoginHomePage/LoginHomePage"
import LoginAboutUs from "./LoginHomePage/aboutUsPage/LoginaboutUsPage";
import LoginContact from "./LoginHomePage/Contact/LoginContact";
import ProductPage from "./ProductPage/productPage";
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <ProductPage /> },
    { path: "/ProductPage", element: <ProductPage /> },
    {path:"",i},
    { path: "/LoginHomePage", element: < LoginHomePage/> },
    { path: "/LoginAboutus", element: < LoginAboutUs/> },
    { path: "/LoginContact", element: < LoginContact/> },

    { path: "/contact", element: <Contact /> },
    { path: "/about", element: <About /> },
    { path: "/SignUp", element: <SignUp /> },
    {
      path: "/SignIn",
      element: <SignIn />,
    },
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
