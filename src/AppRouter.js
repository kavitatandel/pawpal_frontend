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


const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<UserInfo />}></Route>
        {/* <Route path="/profile" element={<Profile />}></Route> */}
        <Route exact path="/user/searchdog" element={<SearchDog />}></Route>
        {/* added to check location based on address */}
        <Route path="/doginfo/:dogid" element={<DogInfo />}></Route>

        <Route path="/test" element={<MapDesignTest />}></Route>
       
        <Route path="/user/adddog" element={<AddDog />}></Route>
        {/* <Route path="/test" element={<MapDesignTest />}></Route> */}

      </Routes>
    </>
  );
};

export default AppRouter;
