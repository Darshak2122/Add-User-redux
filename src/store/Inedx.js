import { configureStore } from "@reduxjs/toolkit";
import users from "./slices/User";

const store = configureStore({
  reducer: {
    userse: users,
  },
});
console.log(store);

export default store;


