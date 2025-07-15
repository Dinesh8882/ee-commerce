import React, { useContext } from "react";
import { ContextProduct } from "../context/ProjectContext";
import { RiDeleteBin6Line } from "react-icons/ri";

function CartList() {
  const { state, dispatch } = useContext(ContextProduct);

  const deleteProduct = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };

  const increaseQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };
  return (
    <div className="mt-[4rem]">
      <div className="head_line grid grid-cols-12 ">
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

      {state.cart.length > 0 ? (
        state.cart.map((item, index) => {
          
          return (
            <div
              key={index}
              className="grid grid-cols-12 border border-t-0 border-gray-300"
            >
              <div className={`col-span-7 flex`}>
                <div className="py-3 px-6 border-r border-gray-300">
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
              <div className="col-span-1 border-x border-r-0 border-gray-300 text-center flex items-center justify-center">
                ${item.price.current}
              </div>
              <div className="col-span-2 text-center flex items-center justify-center border-x border-r-0 border-gray-300">
                <input
                  type="number"
                  value={item.quantity}
                  min={1}
                  onChange={(e) =>
                    increaseQuantity(item.id, Number(e.target.value))
                  }
                  className="border border-gray-300  w-16 outline-none px-2 py-3"
                />
              </div>
              <div className="col-span-1 flex items-center justify-center border border-y-0 border-gray-300">
                {item.totalPrice}
              </div>
              <div className="col-span-1 flex items-center justify-center ">
                <RiDeleteBin6Line
                  onClick={() => deleteProduct(item)}
                  className="cursor-pointer active:text-red-800"
                />
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 p-3 text-xl border-x border-b border-gray-300">
          No Product in Cart
        </p>
      )}
    </div>
  );
}

export default CartList;
