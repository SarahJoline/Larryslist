import AuthService from "../Service/AuthService";
import React, { createContext, useEffect, useState } from "react";
import { CardImgOverlay } from "reactstrap";

export const AuthContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AuthService.isAuthenticated().then((data) => {
      setUser(data.user);
      setIsAuthenticated(data.isAuthenticated);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <div>
          <h1>Loading...</h1>
          <img
            className="loading_image"
            src="https://media1.giphy.com/media/WiIuC6fAOoXD2/giphy.webp?cid=ecf05e474422523d5e175b2051daed69a3b8ef1a9bfbf96c&rid=giphy.webp"
          ></img>
        </div>
      ) : (
        <AuthContext.Provider
          value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
