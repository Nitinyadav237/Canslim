// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import MarketNews from "./pages/MarketNews";
import TopStock from "./pages/TopStock";
import CryptoAnalysis from "./pages/CryptoAnalysis";
import { ErrorPage } from "./pages/Error";
import AppLayout from "./components/Layout.tsx/AppLayout";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
    path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
       {
      path: "/",
      element:<Home/>
    },
        {
      path: "/about",
      element:<About/>
    },
    {
      path: "/crypto-analysis",
      element:<CryptoAnalysis/>
    },
    {
      path: "/market-news",
      element:<MarketNews/>
    },
    {
      path: "/top-stock",
      element:<TopStock/>
    },
    ]},
    
]);

  return (
    <>
         <RouterProvider router={router} />
    </>
  )
}

export default App
