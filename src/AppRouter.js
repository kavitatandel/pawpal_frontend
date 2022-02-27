import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Register from "./pages/Register";
import Login from "./pages/login";
import MapDesignTest from "./components/TestComponents/MapDesignTest";
import UserInfo from "./pages/UserInfo";
import "./styles/layout.css";
import SearchDog from "./pages/SearchDog";
import DogInfo from "./pages/DogInfo";
import AddDog from "./pages/AddDog";
import OwnerDogs from "./pages/OwnerDogs";
import OwnerDogRequests from "./pages/OwnerDogRequests";
import SliderTest from "components/TestComponents/SliderTest";

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

        <Route exact path="/test" element={<MapDesignTest />}></Route>

        <Route exact path="/owner/adddog" element={<AddDog />}></Route>
        <Route exact path="/owner/ownerdogs" element={<OwnerDogs />}></Route>
        <Route exact path="/owner/ownerdogrequests/:dogid" element={<OwnerDogRequests />}></Route>
        <Route path="/testslider" element={<SliderTest />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
