import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage/HomePage";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/aboutUsPage/aboutUsPage";
import SignIn from "./Pages/Login/Sign-in/Sign-inPage";
import SignUp from "./Pages/Login/Sign-up/Sign-upPage";
import LoginHomePage from "./LoginHomePage/LoginHomePage";
import LoginAboutUs from "./LoginHomePage/aboutUsPage/LoginaboutUsPage";
import LoginContact from "./LoginHomePage/Contact/LoginContact";
import SeatPage from "./SeatPage/SeatPage";
import BeddingPage from "./BeddingPage/BeddingPage";
import KitchenPage from "./KitchenPage/KitchenPage";
import StatePage from "./StatePage/StatePage";
const App = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/LoginHomePage", element: <LoginHomePage /> },
    { path: "/LoginAboutus", element: <LoginAboutUs /> },
    { path: "/LoginContact", element: <LoginContact /> },
    { path: "/SeatPage", element: <SeatPage /> },
    { path: "/KitchenPage", element: <KitchenPage /> },
    { path: "/StatePage", element : <StatePage/> },
    {path:"/BeddingPage", element:<BeddingPage/>},
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
