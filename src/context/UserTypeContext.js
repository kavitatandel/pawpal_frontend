import { useState, createContext } from "react";

export const UserTypeContext = createContext([{}, () => {}]);
//export default UserContext;

export const UserTypeContextProvider = ({ children }) => {
  const [isOwner, setIsOwner] = useState(true);

  return (
    <UserTypeContext.Provider value={[isOwner, setIsOwner]}>
      {children}
    </UserTypeContext.Provider>
  );
};
