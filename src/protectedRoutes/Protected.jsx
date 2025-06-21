import React, {useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return token && children
}

export default Protected;
