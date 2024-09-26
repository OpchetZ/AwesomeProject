import React, { createContext, useState } from "react";
const AuthContext = createContext({});

const AuthContextProvider = (props) => {
  const [userToken, setUserToken] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <AuthContext.Provider value={{userToken, setUserToken,user,setUser,loading, setLoading}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };