import axios from "axios";

//create user
export const register = (user) => {
    return axios
        .post("http://localhost:5000/register", {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            user_type: user.user_type,
            street: user.street,
            zip_code: user.zip_code,
            city: user.city,
            country: user.country
        })
        .then((res) => console.log("User is successfully Registered"))
        .catch((err) => console.log(err));
};

export const login = (user) => {
    return axios
        .post("http://localhost:5000/login", {
            email: user.email,
            password: user.password,
        })
        .then((res) => {
            //put user token in local storage
            localStorage.setItem("usertoken", res.data);
            return res.data;
        })
        .catch((err) => console.error(err));
};
