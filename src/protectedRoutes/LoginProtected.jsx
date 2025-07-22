import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginProtected({ children }) {
  const [token,setToken] = useState("")
  const navigate = useNavigate();
  
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return children;
}

export default LoginProtected;
