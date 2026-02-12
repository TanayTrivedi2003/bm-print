import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import BusinessCards from "./pages/BusinessCards";
import StationeryPage from "./pages/StationeryPage";
import DressPage from "./pages/DressPage";
import PackagingPage from "./pages/PackagingPage";
import GiftsPage from "./pages/GiftsPage";
import AvatarPage from "./pages/AvatarPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* BUSINESS CARDS */}
        <Route
          path="/business-cards"
          element={
            <Layout>
              <BusinessCards />
            </Layout>
          }
        />

        {/* STATIONERY */}
        <Route
          path="/stationery"
          element={
            <Layout>
              <StationeryPage />
            </Layout>
          }
        />

        {/* DRESS / APPAREL */}
        <Route
          path="/dress"
          element={
            <Layout>
              <DressPage />
            </Layout>
          }
        />

        {/* PACKAGING */}
        <Route
          path="/packaging"
          element={
            <Layout>
              <PackagingPage />
            </Layout>
          }
        />

        {/* GIFTS */}
        <Route
          path="/gifts"
          element={
            <Layout>
              <GiftsPage />
            </Layout>
          }
        />

        {/* AVATAR */}
        <Route
          path="/avatar"
          element={
            <Layout>
              <AvatarPage />
            </Layout>
          }
        />

        {/* 🛒 CART */}
        <Route
          path="/cart"
          element={
            <Layout>
              <CartPage />
            </Layout>
          }
        />

        {/* 💳 CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <Layout>
              <CheckoutPage />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
