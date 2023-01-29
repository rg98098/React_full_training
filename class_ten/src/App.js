import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import SkeletonLoader from "./components/SkeletonLoader";

const Instamart = lazy(()=>import('./components/Instamart'))


const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement:<Error/>,
    children : [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/resturant/:id",
        element: <ResturantMenu/>
      },
      {
        path:"/instamart",
        element:<Suspense fallback={<SkeletonLoader/>}><Instamart/></Suspense>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
