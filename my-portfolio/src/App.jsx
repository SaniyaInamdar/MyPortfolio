import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Navbar from "./Navbar.jsx";

const Layout = () => {
  return (
    <>
      <Navbar /> 
      <Outlet /> 
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
