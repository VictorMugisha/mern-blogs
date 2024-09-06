import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import Layout from "./layouts/Layout";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
