import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { LuEyeClosed } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function UserRegister() {
  const [passwordHide, setPasswordHide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState({});
  const navigate = useNavigate()
  const [token,setToken] = useState("")

  const url = import.meta.env.VITE_REACT_APP_API_URL;

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    street: "",
    city: "",
    country: "",
    role: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/user/register`, data);
      setLoading(true);
      if (response.data) {

         localStorage.setItem("userData",JSON.stringify(response.data.data))
         localStorage.setItem("token",response.data.token)
         setToken(localStorage.getItem("token"))
         toast.success(response.data.message);
         navigate("/")

      }

      setLoading(false);
      setData({
        name: "",
        email: "",
        password: "",
        street: "",
        city: "",
        country: "",
        role: "",
      });
    } catch (error) {
      const errors = {}
      error.response.data.error.forEach((err)=>{
        errors[err.path] = err.msg
      })

      setErrMsg(errors)
      console.log(errMsg);
    }
  };

  return (
    <div className=" flex justify-center mt-[2rem]">
      <div className="w-xl border border-gray-300 p-8 rounded">
        <h2 className="text-3xl font-bold my-4">Register</h2>
        <form onSubmit={submitHandler}>
          <div className="flex items-center gap-7">
            <div className="flex flex-col flex-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name..."
                className="px-2 py-1 outline-none border border-gray-300"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            <div className="flex flex-col flex-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email..."
                className={`px-2 py-1 border border-gray-300 outline-none ${errMsg.email && "border border-red-600"}`}
                onChange={handleChange}
                value={data.email}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="password">Password</label>
            <div className="flex border border-gray-300 items-center pr-2">
              <input
                type={`${passwordHide ? "password" : "text"}`}
                name="password"
                placeholder="Enter password..."
                className="px-2 w-full py-1 border-none outline-none"
                onChange={handleChange}
                value={data.password}
              />
              {passwordHide ? (
                <LuEyeClosed
                  className="cursor-pointer"
                  onClick={() => setPasswordHide(!passwordHide)}
                />
              ) : (
                <FaRegEye
                  className="cursor-pointer"
                  onClick={() => setPasswordHide(!passwordHide)}
                />
              )}
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-xl">Address</h3>
            <div className="flex flex-col md:flex-row gap-2 w-full">
              <div className="flex flex-col mt-3 flex-1">
                <label htmlFor="street">Street</label>
                <input
                  type="text"
                  placeholder="street / door no"
                  className="px-2 py-1 border border-gray-300 outline-none w-full"
                  onChange={handleChange}
                  value={data.street}
                  name="street"
                />
              </div>
              <div className="flex flex-col mt-3 flex-1">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  className="px-2 py-1 border border-gray-300 outline-none w-full"
                  placeholder="City..."
                  onChange={handleChange}
                  value={data.city}
                />
              </div>
              <div className="flex flex-col mt-3 flex-1">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  name="country"
                  className="px-2 py-1 border border-gray-300 outline-none w-full"
                  placeholder="Country..."
                  onChange={handleChange}
                  value={data.country}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="role">Role</label>
            <select
              name="role"
              className="p-2 outline-none border border-gray-300"
              onChange={handleChange}
              value={data.role}
            >
              <option value="setect-role">Select Role..</option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button className="cursor-pointer bg-blue-600 w-full mt-4 p-2 text-white">
            Sign up
          </button>
        </form>

        <p className="text-center my-3">
          Already have an Account?
          <Link to="/user/login" className="text-blue-500 ml-2">
            Login
          </Link>
        </p>
      </div>
      {loading && <p>Loading....  </p>}
    </div>
  );
}

export default UserRegister;

// https://www.jotform.com/form-templates/e-commerce-registration-form
