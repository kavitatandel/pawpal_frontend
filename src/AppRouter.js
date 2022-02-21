import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Register from "./pages/Register";
import Login from "./pages/login";
import Profile from "pages/Profile";
import UserInfo from "./pages/UserInfo";
import "./styles/layout.css";
import SearchDog from "./pages/SearchDog";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserInfo />}></Route>
        {/* <Route path="/profile" element={<Profile />}></Route> */}
        <Route path="/user/searchdog" element={<SearchDog />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
