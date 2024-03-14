import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex].quantity++;
        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice + action.payload.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    case 'REMOVE_ITEM':
      const itemToRemove = state.items.find(item => item.id === action.payload.id);
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
