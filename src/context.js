import React, { useEffect, useContext, useReducer } from 'react';
import reducer from './reducer';

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  loading: false,
  amount: 0,
  total: 0,
  product: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearItems = () => {
    dispatch({ type: 'CLEAR_ITEMS' });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const increaseAmt = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };
  const decreaseAmt = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  const fetchItem = async () => {
    dispatch({ type: 'LOADING' });
    const resp = await fetch(url);
    const data = await resp.json();
    dispatch({ type: 'FETCH_PRODUCT', payload: data });
  };

  useEffect(() => {
    fetchItem();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.product]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearItems,
        removeItem,
        increaseAmt,
        decreaseAmt,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
