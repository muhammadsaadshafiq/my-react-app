import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Reports = React.lazy(() => import("pages/Reports"));
const Billpayments = React.lazy(() => import("pages/Billpayments"));
const Business = React.lazy(() => import("pages/Business"));
const Users = React.lazy(() => import("pages/Users"));
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Login = React.lazy(() => import("pages/Login"));
const LoginOne = React.lazy(() => import("pages/LoginOne"));
const Loginin = React.lazy(() => import("pages/Loginin"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Loginin />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginone" element={<LoginOne />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/business" element={<Business />} />
          <Route path="/billpayments" element={<Billpayments />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
