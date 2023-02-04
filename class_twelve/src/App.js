import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResturantMenu from "./components/ResturantMenu";
import SkeletonLoader from "./components/SkeletonLoader";
import UserContext from "./utils/UserConext";
import {Provider} from "react-redux";
import store from "./utils/store";


const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [users, setUsers] = useState({
    name: "Rahul Gupta",
    email: "test@1234",
  });

  return (
    <Provider store={store}>
    <UserContext.Provider value={{ user: users,setUser: setUsers }}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<SkeletonLoader/>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resturant/:id",
        element: <ResturantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<SkeletonLoader />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
