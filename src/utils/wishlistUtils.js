import { toast } from "react-toastify";
import { addToWishList, deleteToWishList } from "../features/wishlistSlice";


export const addProductToWishList = (product, state, dispatch) => {
    if (!state.wishList.some((item) => item.id === product.id)) {
        dispatch(addToWishList(product));
        toast.success("Added to Favourite successfully!");
    }
};

export const deletedWishList = (id, state, dispatch) => {
    if (state.wishList.some((item) => item.id === id)) {
        dispatch(deleteToWishList(id));
        toast.success("Deleted successfully!");
    }
};