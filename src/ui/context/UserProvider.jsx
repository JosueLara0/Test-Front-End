//* libraries
import { useState } from "react";
//* Context
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const cartCounter = parseInt(localStorage.getItem("cartCounter")) || 0;

  const [cart, setCart] = useState(cartCounter);

  return (
    <UserContext.Provider value={{ cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
