import SignIn from "../Components/Auth/SignIn";
import SignUp from "../Components/Auth/SignUp";
import Authroute from "./Authroute";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import ProtectedRoute from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Authroute>
            <SignIn />
          </Authroute>
        }
      />
      <Route
        path="/SignUp"
        element={
          <Authroute>
            <SignUp />
          </Authroute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
