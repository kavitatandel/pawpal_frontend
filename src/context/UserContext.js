import { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => (
  <UserContext.Provider
    value={useState({
      location: {
        coordinates: [],
      },
      _id: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      user_type: "owner",
      street: "",
      city: "",
      zip_code: "",
      country: "",
      __v: 0,
      profile_pic: "",
      description: "",
      latitude: 51.0647,
      longitude: 12.0128,
    })}
  >
    {children}
  </UserContext.Provider>
);

// const [user, setUser] = useState({
//   location: {
//     coordinates: [],
//   },
//   _id: "",
//   first_name: "",
//   last_name: "",
//   email: "",
//   password: "",
//   user_type: "",
//   street: "",
//   city: "",
//   zip_code: "",
//   country: "",
//   __v: 0,
//   profile_pic: "",
//   description: "",
//   latitude: 51.0647,
//   longitude: 12.0128,
// });
// return (
//   <UserContext.Provider value={{ user: [user, setUser] }}>
//     {children}
//   </UserContext.Provider>
// );
