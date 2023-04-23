import { createStore, combineReducers } from "redux"

import { cartReducer } from "../features/cart/cartSlice"
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice"
import { inventoryReducer } from "../features/inventory/inventorySlice"
import { searchTermReducer } from "../features/searchTerm/searchTermSlice"

export const store = createStore(combineReducers({
    cart: cartReducer,
    inventory: inventoryReducer,
    currencyFilter: currencyFilterReducer,
    searchTerm: searchTermReducer
    
}))