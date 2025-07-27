import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart, increaseQuantity } from "../features/cartSlice";

import { products } from "../assets/data";
function CartList() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const deleteProduct = (id) => {
    if (cart.some((item) => item.id === id)) {
      dispatch(deleteToCart(id));
      toast.success("Item deleted successfully!");
    }
  };

  const increaseProductQuantity = (id, quantity) => {
    dispatch(increaseQuantity({ id, quantity }));
  };
  return (
    <div className="mt-[4rem]">
      <div className="head_line hidden md:grid md:grid-cols-12 ">
        <div className=" col-span-7 flex">
          <p className="text-center  px-11 border border-r-0 border-gray-300 py-3 font-bold text-gray-800">
            image
          </p>
          <p className="text-center border flex-1 border-r-0 border-gray-300 py-3 font-bold text-gray-800">
            Name
          </p>
        </div>
        <p className="text-center col-span-1 border border-r-0 border-gray-300 py-3 font-bold text-gray-800">
          Price
        </p>
        <p className="text-center col-span-2 border border-r-0 border-gray-300 py-3 font-bold text-gray-800">
          Quantity
        </p>
        <p className="text-center col-span-1 border border-r-0 border-gray-300 py-3 font-bold text-gray-800">
          Subtotal
        </p>
        <p className="text-center col-span-1 border border-gray-300 py-3 font-bold text-gray-800">
          Remove
        </p>
      </div>

      {cart.length > 0 ? (
        cart.map((item, index) => {          
          return (
            <div
              key={index}
              className={`md:grid md:grid-cols-12 border border-gray-300 flex flex-col md:flex-none gap-3 md:gap-0 ${index === 0 ? "border-t md:border-t-0 border-b-0":"border-b-0"}`}
            >
              <div className={`md:col-span-7 flex flex-col border-b border-gray-300 md:border-0 py-3 md:py-0 items-center  md:flex-row`}>
                <div className="py-3 px-6 md:border-r border-gray-300">
                  <img
                    src={item.imageUrl.front_img}
                    alt="product"
                    className="w-[80px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-center flex-1">
                  <h3 className="text-[#088178] font-bold text-[15px]">
                    {item.title}
                  </h3>
                  {/* <p className="text-gray-600">Maboriosam in a tontos.</p> */}
                </div>
              </div>

              <div className="md:col-span-1 md:border-x md:border-r-0 border-b border-gray-300 md:border-0 pb-3 md:pb-0 text-center flex items-center justify-center">
                ${item.price.current}
              </div>

              <div className="md:col-span-2 text-center flex items-center border-b md:border-b-0 pb-3 md:pb-3 justify-center md:border-x border-r-0 border-gray-300">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    increaseProductQuantity(item.id, Number(e.target.value))
                  }
                  className="border border-gray-300  w-16 outline-none px-2 py-3"
                />
              </div>

              <div className="md:col-span-1 border-b pb-2 md:border-b-0 flex border-l-0 items-center justify-center border border-y-0 border-gray-300">
                {item.subTotale}
              </div>

              <div className="md:col-span-1 pb-3 flex items-center justify-center ">
                <RiDeleteBin6Line
                  onClick={() => deleteProduct(item.id)}
                  className="cursor-pointer active:text-red-800"
                />
              </div>

            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 p-3 text-xl border-x border-b border-t md:border-t-0 border-gray-300">
          No Product in Cart
        </p>
      )}
    </div>
  );
}

export default CartList;
