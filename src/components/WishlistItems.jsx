import React from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";

import { toast } from "react-toastify";

import { useSelector, useDispatch } from "react-redux";
import { addToCart  } from "../features/cartSlice";
import { deleteToWishList } from "../features/wishlistSlice";

function WishlistItems() {
  
  const wishlist = useSelector((state)=>state.wishList.wishList)
  const cart = useSelector((state)=>state.cart.cart)
  const dispatch = useDispatch();

  const deleteProduct = (id) => {
    if (wishlist.some((item) => item.id === id)) {
      dispatch(deleteToWishList(id))
      toast.success("Item deleted successfully!");
    }
  };

  const addProductToCart = (product) => {
    if (!cart.some((item) => item.id === product.id)) {
      dispatch(addToCart(product))
      toast.success("Added to cart successfully!");
    } else {
      toast.error("Already Added!");
    }
  };

  return (
    <div className="mt-[4rem]">
      <div>
        <div className="head_line grid grid-cols-12 ">
          <p className="text-center col-span-6 border border-r-0 border-gray-300 py-3 font-bold text-gray-800">
            Product
          </p>
          <p className="text-center col-span-1 border border-r-0 border-gray-300 py-3 font-bold text-gray-800">
            Price
          </p>

          <p className="text-center col-span-2 border border-r-0 border-gray-300 py-3 font-bold text-gray-800">
            Stock Status
          </p>
          <p className="text-center col-span-2 border border-r-0 border-gray-300 py-3 font-bold text-gray-800">
            Subtotal
          </p>
          <p className="text-center col-span-1 border border-gray-300 py-3 font-bold text-gray-800">
            Remove
          </p>
        </div>
      </div>
      {wishlist.length > 0 ? (
        wishlist.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-12 border border-t-0 border-gray-300"
            >
              <div className={`col-span-6 flex`}>
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
                <p>In Stock</p>
              </div>
              <div className="col-span-2 flex items-center justify-center border border-y-0 border-gray-300">
                <div
                  onClick={() => addProductToCart(item)}
                  className="flex gap-1 items-center justify-center active:bg-[#448b87] bg-[#088178] text-white px-6 rounded-sm cursor-pointer hover:bg-[#325553] py-2"
                >
                  <BiShoppingBag />
                  Add to cart
                </div>
              </div>
              <div className="col-span-1 flex items-center justify-center ">
                <RiDeleteBin6Line
                  onClick={() => deleteProduct(item.id)}
                  className="cursor-pointer active:text-red-800"
                />
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-center text-gray-500 p-3 text-xl border-x border-b border-gray-300">
          No Data
        </p>
      )}
    </div>
  );
}

export default WishlistItems;
