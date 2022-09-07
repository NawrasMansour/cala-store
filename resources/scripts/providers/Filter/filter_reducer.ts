
const filter_reducer = (state :any, action :any) => {

  switch (action.type) {
    case 'LOAD_PRODUCTS':
      if(action.payload){
        let maxPrice = action.payload.map( (p:any)=> p.price);
        maxPrice = Math.max(...maxPrice);
        return {  ...state ,
                  all_products : action.payload ,
                  filtered_products : action.payload,
                  filters : {...state.filters,
                                max_price : maxPrice ,
                                price: maxPrice}
              }
      }
      return {...state}
    case 'UPDATE_FILTERS':
      const {name,value} = action.payload;
      return {...state,
                 filters : {...state.filters,
                              [name] : value}
             }
    case 'FILTER_PRODUCTS':
      const {all_products} = state;
      const {text,category,company,color,price} = state.filters
      let tempProducts = [...all_products];
      //filtering
      // text
    //   if(text){
    //     tempProducts = tempProducts.filter( (product)=>{
    //       return product.name.toLowerCase().startsWith(text);
    //     })
    //   }
    //   // category
    //   if(category !=='all'){
    //     tempProducts = tempProducts.filter( (product)=> product.category === category)
    //   }
    //   // company
    //   if(company !=='all'){
    //     tempProducts = tempProducts.filter( (product)=> product.company === company)
    //   }
      // color
      if(color !=='all'){

        tempProducts = tempProducts.filter( (product)=> {
          return product.colors.find( (c : any ) => c.id == color)
        })

      }else{
        tempProducts = tempProducts;
      }
      // price
        tempProducts = tempProducts.filter( (product)=> product.price <= price)
      return {...state,filtered_products : tempProducts}
    case 'CLEAR_FILTERS':
      return {...state, filters :{
                          text : '',
                          company : 'all',
                          category : 'all',
                          color : 'all',
                          min_price : 0,
                          max_price : state.filters.max_price,
                          price : state.filters.max_price,
                          shipping : false,
                        }
            }

    default:
      return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }

}

export default filter_reducer