import { Routes, Route, useLocation } from "react-router-dom";

import LandingStyled from "./pages/LandingStyled";
import Register from "./pages/Register";
import Login from "./pages/login";

import UserInfo from "./pages/UserInfo";
import "./styles/layout.css";
import SearchDog from "./pages/SearchDog";
import DogInfo from "./pages/DogInfo";
import AddDog from "./pages/AddDog";
import OwnerDogs from "./pages/OwnerDogs";
import OwnerDogRequests from "./pages/OwnerDogRequests";
import DogLoverRequests from "./pages/DogLoverRequests";
import EditDog from "./pages/EditDog.js";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingStyled />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/user" element={<UserInfo />}></Route>
        {/* <Route path="/profile" element={<Profile />}></Route> */}
        <Route exact path="/user/searchdog" element={<SearchDog />}></Route>
        <Route
          exact
          path="/user/dogloverrequests"
          element={<DogLoverRequests />}
        ></Route>
        {/* added to check location based on address */}
        <Route exact path="/doginfo/:dogid" element={<DogInfo />}></Route>
        <Route exact path="/owner/adddog" element={<AddDog />}></Route>
        <Route exact path="/owner/ownerdogs" element={<OwnerDogs />}></Route>
        {/* <Route exact path="/owner/ownerdogrequests/:dogid" element={<OwnerDogRequests />}></Route> */}
        <Route
          exact
          path="/owner/ownerdogrequests"
          element={<OwnerDogRequests />}
        ></Route>
        <Route
          exact
          path="/owner/ownerdogrequests/:dogid"
          element={<OwnerDogRequests />}
        ></Route>
        <Route exact path="/editdog/:dogid" element={<EditDog />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
