import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //check if items contain the coming product (as payload) as it existng product with its count
      let obj = state.items.find((x) => x.product.id == action.payload.id);
      console.log("this is the already existing product in items", obj);
      if (obj) {
        obj.count += 1;
        console.log(
          "this is the count of already existing prodct",
          state.items
        );
      } else {
        //add the obj({product:,count:}) to the items
        state.items.push({ product: action.payload, count: 1 });
        console.log("the cart contains", state.items);
      }
    },
    removeItem: (state, action) => {
      let prod = state.items.find((x) => x.product.id === action.payload.id);

      if (prod) {
        prod.count -= 1; // Decrease the count by 1

        // If the count reaches 0, remove the product from the list
        if (prod.count === 0) {
          state.items = state.items.filter(
            (item) => item.product.id !== action.payload.id
          );
        }
      }
    },
  },
});
export const { addItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
