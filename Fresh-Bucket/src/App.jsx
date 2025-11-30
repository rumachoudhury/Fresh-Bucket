import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import MainLayout from "./layouts/MainLayout";
import UserProfile from "./components/UserProfile/UserProfile";
import OrderList from "./components/OrderList/OrderList";
import ProductPage from "./components/2ndWebPage/ProductPage";

import Description from "./components/2ndWebPage/Description";

function App() {
  return (
    <>
      <Routes>
        {/* MainLayout wraps multiple routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index={true} element={<Home />} />

          <Route path="pages" element={<ProductPage />} />

          <Route path="profile" element={<UserProfile />} />
          <Route path="products" element={<OrderList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
