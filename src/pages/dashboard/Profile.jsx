import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import img from "../../assets/tushar.jpeg";
import { toast } from "react-toastify";

function Profile() {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const url = import.meta.env.VITE_REACT_APP_API_URL;
  const [enable, setEnable] = useState(true);
  const [token,setToken] = useState("")

  const [updateData, setUpdataData] = useState(userData);

  console.log(updateData);

  const onChangeHandler = (e)=>{
    setUpdataData({...updateData,[e.target.name]:e.target.value})
  }

  const updateHandler = async () => {
    
  };

  const logOutHandler = async () => {
    try {
      const response = await axios.get(`${url}/user/logout`);
      if (response.data) {
        localStorage.clear();
        setToken("");
        toast.success("User Logout successfully!");
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className=" bg-gray-200 p-4 py-[4rem]">
      <div className="flex gap-5 justify-center">
        <div className="left p-8 bg-white flex flex-col items-center">
          <div className="img flex overflow-hidden rounded-full w-[150px] h-[150px]">
            <img src={img} className="w-full h-full object-cover" alt="" />
          </div>
          <div>
            <h2 className="text-center text-2xl font-bold">{updateData.name}</h2>
            <p className="text-center text-gray-400">{updateData.role}</p>
          </div>
          <div className="flex gap-2">
            <button
              className={`bg-red-500 px-4 py-1 mt-1 text-white cursor-pointer ${
                updateData.role !== "admin" && "w-full"
              }`}
            >
              Logout
            </button>
            {updateData.role === "admin" && (
              <button className="bg-blue-500 px-4 py-1 mt-1 text-white cursor-pointer">
                Deshbord
              </button>
            )}
          </div>
        </div>
        <div className="right  p-8 bg-white w-3xl">
          <table border="1" className="">
            <tbody>
              <tr>
                <th className="text-left">Name</th>
                <td>
                  <input
                    disabled={enable}
                    className={`mb-2  ml-6 p-2 w-xl `}
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={updateData.name}
                    onChange={onChangeHandler}
                  />
                </td>
              </tr>
              <tr>
                <th className="text-left">Email</th>
                <td>
                  <input
                    disabled={enable}
                    className={`mb-2 "border-none outline-none" ml-6 p-2 w-xl  `}
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={updateData.email}
                    onChange={onChangeHandler}

                  />
                </td>
              </tr>
              <tr>
                <th className="text-left">Country</th>
                <td>
                  <input
                    disabled={enable}
                    className={`mb-2   "border-none outline-none"  ml-6 p-2 w-xl  `}
                    type="text"
                    placeholder="Enter country"
                    name="country"
                    value={updateData.address[0].country}
                    onChange={onChangeHandler}

                  />
                </td>
              </tr>
              <tr>
                <th className="text-left">City</th>
                <td>
                  <input
                    disabled={enable}
                    className={`mb-2   "border-none outline-none" ml-6 p-2 w-xl  `}
                    type="text"
                    placeholder="Enter city"
                    name="city"
                    value={updateData.address[0].city}

                  />
                </td>
              </tr>
              <tr>
                <th className="text-left">Street</th>
                <td>
                  <input
                    disabled={enable}
                    className={`mb-2 "border-none outline-none" ml-6 p-2 w-xl  `}
                    type="text"
                    placeholder="Enter street"
                    name="street"
                    value={updateData.address[0].street}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-3">
            <button className="px-3 py-1 bg-blue-500 mt-6 text-white cursor-pointer active:bg-blue-400"
              onClick={()=>setEnable(false)}
            >
              Edit
            </button>
            {enable === false && (
              <button
                className="px-3 py-1 bg-green-500 mt-6 text-white cursor-pointer active:bg-green-400"
              >
                Update
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
