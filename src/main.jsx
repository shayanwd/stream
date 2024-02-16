import React, { useState, useEffect } from 'react';
import { AuthContext } from "./authContext";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import PublicHeader from "./components/PublicHeader";


import AdminLoginPage from "./pages/AdminLoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import WelcomePage from "./pages/WelcomPage";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5"
import Result from "./pages/Result";


function renderHeader(role) {
  switch (role) {
    case "admin":
      return <AdminHeader />;

    default:
      return <PublicHeader />;
  }
}

function renderRoutes(role) {
  switch (role) {
    case "admin":
      return (
        <Routes>
          <Route exact path="/admin" element={<AdminDashboardPage />}></Route>

          <Route
            path="*"
            element={<Navigate to="/admin" /> || <NotFoundPage />}
          ></Route>
        </Routes>
      );

    default:
      return (
        <Routes>
          <Route exact path="/login" element={<AdminLoginPage />}></Route>
          <Route path="/" exact element={<WelcomePage />}></Route>
          <Route path="/step1" exact element={<Step1 />}></Route>
          <Route path="/step2" exact element={<Step2 />}></Route>
          <Route path="/step3" exact element={<Step3 />}></Route>
          <Route path="/step4" exact element={<Step4 />}></Route>
          <Route path="/step5" exact element={<Step5 />}></Route>
          <Route path="/result" exact element={<Result />}></Route>

          <Route path="*" exact element={<NotFoundPage />}></Route>
        </Routes>
      );
  }
}

function Main() {
  const [shownav, setshownav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setshownav(false);
  }, [location.pathname]);


  const allowedRoutes = ['/', '/step1'];

  const showUl = allowedRoutes.includes(location.pathname);

  const { state } = React.useContext(AuthContext);
  return (
    <div className={`h-full ${showUl? 'back-img-holder': ' '}  `}>
      {!state.isAuthenticated ? <PublicHeader /> : renderHeader(state.role)}
      <div className="page-wrapper w-full min-h-screen ">
        {!state.isAuthenticated
          ? renderRoutes("none")
          : renderRoutes(state.role)}
      </div>
      {/* <SnackBar /> */}
    </div>
  );
}

export default Main;
