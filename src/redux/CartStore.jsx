        import { createSlice } from "@reduxjs/toolkit";
        export const CartStore = createSlice(
         {
    name : "cart",
    initialState : [],
    reducers : {
    AddItem:(state,action)=>{
    const exists = state.find(item => item.id === action.payload.id);
    if (exists) {
        return state.map((items)=>items.id === action.payload.id?{...items,qty:items.qty+1}:items)
    } else {
        state.push(action.payload)
    } 
    },
    RemoveItems:(state,action)=>{
    return state.filter((items)=>items.id!== action.payload)
    },
    IncrementQty:(state,action)=>{
        return state.map((items)=>items.id === action.payload?{...items,qty:items.qty+1}:items)
    }, 
    DecrementQty:(state,action)=>{
        return state.map((items)=>items.id === action.payload?{...items,qty:items.qty-1}:items)
    }, 
        }
            }
        )
    export const {AddItem,RemoveItems,IncrementQty,DecrementQty} = CartStore.actions;
    export default CartStore.reducer