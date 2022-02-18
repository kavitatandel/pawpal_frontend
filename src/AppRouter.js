import { Routes, Route } from "react-router-dom";
import Landing from './pages/landing';
import Register from './pages/Register';
import Login from './pages/login';
import UserInfo from './pages/UserInfo';
import './styles/layout.css';

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Landing />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/user' element={<UserInfo />}></Route>
            </Routes>
        </>
    )
}

export default AppRouter;