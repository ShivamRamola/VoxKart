import React, { createContext } from "react";
export const authDataContext = createContext();
function AuthContext({ children }) {
  let value = {};
  return (
    <div>
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
    </div>
  );
}

export default AuthContext;
