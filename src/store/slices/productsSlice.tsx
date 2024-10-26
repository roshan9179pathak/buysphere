import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description:string;
  category: string;
  rating: {
    rate: number,
    count: number
  }
}

interface Type {
  id:number
}

interface ProductState {
  products: Product[];
  // selectedProduct: Product | null
}

const initialState: ProductState = {
  products: [],
  // selectedProduct:null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
   
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    
    // getProduct: (state , action: any) =>{
    //   const index = state.products.findIndex(product => product.id === action.payload.id);
    //   state.selectedProduct = state.products[index]
    // },

    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    
    removeProduct: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter(product => product.id !== action.payload.id);
    },

    clearState:()=>initialState
  },
});


export const { addProduct, updateProduct, removeProduct , clearState } = productSlice.actions;


export default productSlice.reducer;
