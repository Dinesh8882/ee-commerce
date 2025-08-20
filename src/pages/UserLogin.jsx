import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SubButton from "../components/SubButton";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { loginThunk } from "../features/auth/authThunk";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function UserLogin() {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleUsersData = async (e) => {
    e.preventDefault();

    try {
      const response = await dispatch(loginThunk(data)).unwrap()
      
      if (response) {

        localStorage.setItem("userData", JSON.stringify(response.data))
        localStorage.setItem("token", response.token)
        setToken(localStorage.getItem("token"))
        toast.success(response.message);
        navigate("/")

      }
      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        localStorage.setItem("token", response.data.token);

        navigate('/')
      }
    } catch (error) { }
  };



  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 bg-white border w-sm rounded-2xl border-gray-200 ">
        <p className="mb-2">Please enter your details</p>
        <h3 className="mb-6 font-bold text-2xl">Login</h3>
        <form onSubmit={(e) => handleUsersData(e)}>
          <div>
            <input
              className="w-full pl-3 py-1 border border-gray-200 mb-6"
              type="email"
              placeholder="Email address"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>
          <div>
            <input
              className="w-full pl-3 py-1 border border-gray-200 "
              type="password"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>
          <div className="flex justify-between  mt-3">
            <div className="flex items-center gap-1.5">
              {" "}
              <input type="checkbox" name="" />
              <p className="text-[12px]">Remember for 30 days</p>
            </div>
            <Link className="text-blue-700">Forgot password</Link>
          </div>
          <SubButton btnName="Login" color={true} />
          <div className="flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-sm">
            <FcGoogle />
            Sign in with Google
          </div>
        </form>
        <p className="text-center my-3">
          Don't have an account?
          <Link to="/user/register" className="text-blue-500 ml-2">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;
