import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import BusinessCards from "./pages/BusinessCards";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/business-cards"
          element={
            <Layout>
              <BusinessCards />
            </Layout>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
