import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./services/users";
import { setupListeners } from "@reduxjs/toolkit/query";
import { carsApi } from "./services/cars";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath] : usersApi.reducer,
        [carsApi.reducerPath] : carsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, carsApi.middleware),
})

setupListeners(store.dispatch)