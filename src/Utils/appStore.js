import { configureStore } from "@reduxjs/toolkit";
import reducer from "./CartSlice";

const appStore = configureStore({
  reducer: {
    shoppingCart: reducer,
  },
});
export default appStore;
