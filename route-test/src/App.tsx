import "./App.css";

import {
  // BrowserRouter,
  // Routes,
  // Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Product from "./components/Product";
import NotFound from "./components/NotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Main />
//       </>
//     ),
//   },
//   {
//     path: "/product/*",
//     element: (
//       <>
//         <Header />
//         <Product />
//       </>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <>
//         <Header />
//         <NotFound />
//       </>
//     ),
//   },
// ]);

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "product/*", element: <Product /> },
      // { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Main />} />
    //     <Route path="/product/*" element={<Product />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
