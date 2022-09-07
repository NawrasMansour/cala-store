import React, { useEffect, useContext, useReducer, useState } from 'react'
import reducer from './filter_reducer'

// import { useProductsContext } from './products_context'

const initialContext = {
  filtered_products:[] as any,
  all_products:[] as any,
  filters : {
    text : '',
    group : 'all',
    category : 'all',
    color : 'all',
    min_price : 0,
    max_price : 0,
    price : 0,
  },
  fetchProducts : (() => {}) as any,
  updateFilters : (() => {}) as any,
  clearFilters : (() => {}) as any,
}

const initialState = {}

const FilterContext = React.createContext(initialContext)

export const FilterProvider = ({initialProduct,children }: any) => {
   const [products , setProducts] = useState(initialProduct);//useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialContext);

  const fetchProducts = (fetchedProducts : any) => {
    setProducts(fetchedProducts);
    dispatch({type:'LOAD_PRODUCTS' , payload : products})
  }

  useEffect(()=>{
    fetchProducts(products)
  },[products])

  useEffect(()=>{
    dispatch({type:'FILTER_PRODUCTS'})
  },[products,state.filters])

  const updateFilters = (e : any) => {
    const name  = e.target.name;
    let value = e.target.value;
    if(name === 'category')
      value = e.target.textContent;
    if(name === 'color')
      value = e.target.value;
    if(name === 'price')
      value = Number(value);
    if(name === 'shipping')
      value = e.target.checked;
    dispatch({type:'UPDATE_FILTERS' , payload : {name,value}});
  }

  const clearFilters = ()=> {
    dispatch({type:'CLEAR_FILTERS'});
  }

  return (
    <FilterContext.Provider value={{...state,updateFilters,clearFilters,fetchProducts}}>
      {children}
    </FilterContext.Provider>
  )
}
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext)
}
