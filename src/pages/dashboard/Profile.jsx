import React, { useState } from "react";
import img from "../../assets/tushar.jpeg";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { updateThunk } from "../../features/auth/authThunk";


function Profile() {
  const userData = useSelector((state) => state.auth.user)

  const [enable, setEnable] = useState(true);
  const token = localStorage.getItem("token")

  const [data, setData] = useState(userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (["country", "city", "street"].includes(name)) {
      setData({
        ...data,
        address: {
          ...data.address,
          [name]: value,
        },
      });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const updateHandler = async () => {
    const response = await dispatch(updateThunk({ data, token })).unwrap();
    if (response.success) {
      localStorage.setItem("userData", JSON.stringify(response.data));
      toast.success(response.message);
      setEnable(true);
    }
  };

  const logOutProfile = () => {
    dispatch(logout());
    localStorage.clear()
    navigate("/");
  };

  return (
    <div className=" bg-gray-200 p-4 py-[4rem]">
      <div className="flex gap-5 justify-center">
        <div className="left p-8 bg-white flex flex-col items-center">
          <div className="img flex overflow-hidden rounded-full w-[150px] h-[150px]">
            <img src={img} className="w-full h-full object-cover" alt="" />
          </div>
          <div>
            <h2 className="text-center text-2xl font-bold">{data.name}</h2>
            <p className="text-center text-gray-400">{data.role}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={logOutProfile}
              className={`bg-red-500 px-4 py-1 mt-1 text-white cursor-pointer ${data.role !== "admin" && "w-full"
                }`}
            >
              Logout
            </button>
            {data.role === "admin" && (
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
                    value={data.name}
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
                    value={data.email}
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
                    value={data.address.country}
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
                    value={data.address.city}
                    onChange={onChangeHandler}
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
                    value={data.address.street}
                    onChange={onChangeHandler}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-3">
            {/* <button
              className="px-3 py-1 bg-blue-500 mt-6 text-white cursor-pointer active:bg-blue-400"
              onClick={() => setEnable(false)}
            >
              Edit
            </button> */}
            {/* {!enable && (
              <button
                onClick={updateHandler}
                className="px-3 py-1 bg-green-500 mt-6 text-white cursor-pointer active:bg-green-400"
              >
                Update
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
