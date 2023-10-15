import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/login/Login";
import Auth from "./auth/Auth";
import App from "./App";
import ProtectedRoute from "./util/ProtectedRoute";
import Home from "./portal/home/Home";
import About from "./about/About";
import NotFound from "./components/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="" element={<Login />} />
		  <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/" element={<App />}>
          <Route
            path=""
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
		   <Route
            path="about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
        </Route>
		<Route
            path="*"
            element={
                <NotFound/>
            }
          />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
