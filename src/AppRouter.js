import { Routes, Route, useLocation } from "react-router-dom";

import Landing from "./pages/landing";
import Register from "./pages/Register";
import Login from "./pages/login";

import UserInfo from "./pages/UserInfo";
import "./styles/layout.css";
import SearchDog from "./pages/SearchDog";
import DogInfo from "./pages/DogInfo";
import AddDog from "./pages/AddDog";
import OwnerDogs from "./pages/OwnerDogs";
import OwnerDogRequests from "./pages/OwnerDogRequests";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/user" element={<UserInfo />}></Route>
        {/* <Route path="/profile" element={<Profile />}></Route> */}
        <Route exact path="/user/searchdog" element={<SearchDog />}></Route>
        {/* added to check location based on address */}
        <Route exact path="/doginfo/:dogid" element={<DogInfo />}></Route>
        <Route exact path="/owner/adddog" element={<AddDog />}></Route>
        <Route exact path="/owner/ownerdogs" element={<OwnerDogs />}></Route>
        {/* <Route exact path="/owner/ownerdogrequests/:dogid" element={<OwnerDogRequests />}></Route> */}
        <Route exact path="/owner/ownerdogrequests" element={<OwnerDogRequests />}></Route>
        <Route
          exact
          path="/owner/ownerdogrequests/:dogid"
          element={<OwnerDogRequests />}
        ></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
