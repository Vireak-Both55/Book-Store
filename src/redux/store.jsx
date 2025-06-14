import { configureStore } from "@reduxjs/toolkit";
import CartStore from "./CartStore";
export const store = configureStore(
    {
        reducer:{
            cart : CartStore
        }
    }
) ; 