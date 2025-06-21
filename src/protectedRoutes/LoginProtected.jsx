import React, { useContext, useEffect } from "react";
import { ContextProduct } from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";

function LoginProtected({ children }) {
  const { token } = useContext(ContextProduct);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return children;
}

export default LoginProtected;
