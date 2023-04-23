import React from 'react';
 
import { Inventory } from '../features/inventory/Inventory.jsx';
import { CurrencyFilter } from '../features/currencyFilter/CurrencyFilter.jsx';
import { Cart } from '../features/cart/Cart.jsx';
import { SearchTerm } from '../features/searchTerm/SearchTerm.jsx'
import { useDispatch, useSelector } from 'react-redux';

 

// Import the Cart component here.
const currencyFilter = (state) => state.currencyFilter
const inventoryFilter = (state) => state.inventory
const cartFilter = (state) => state.cart
const searchFilter = (state) => state.searchTerm
// Render the Cart component below <Inventory />
export const App = (props) => {

  const currencyFilterProp = useSelector(currencyFilter)
  const inventoryFilterProp = useSelector(inventoryFilter)
  const cartProp = useSelector(cartFilter)
  const searchProp = useSelector(searchFilter)

  const dispatch = useDispatch()



  return (
    <div>
     
     <CurrencyFilter
        currencyFilter={currencyFilterProp}
        dispatch={dispatch}
      />
        <SearchTerm 
        searchTerm={searchProp}
        dispatch={dispatch}
      />
  

      <Inventory
        inventory={getFilteredItems(inventoryFilterProp, searchProp)}
        currencyFilter={currencyFilterProp}
        dispatch={dispatch}
      /> 

      <Cart 
        cart={cartProp}
        currencyFilter={currencyFilterProp}
        dispatch={dispatch}
      />

    

    </div>
  );
};

function getFilteredItems(items, searchTerm) {
  return items.filter(items => items.name.toLowerCase().includes(searchTerm.toLowerCase()));
}
