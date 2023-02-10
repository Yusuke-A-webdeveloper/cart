const reducer = (state, action) => {
  if (action.type === 'CLEAR_ITEMS') {
    return { ...state, product: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    return {
      ...state,
      product: state.product.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === 'INCREASE') {
    let tempCart = state.product.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, product: tempCart };
  }
  if (action.type === 'DECREASE') {
    let tempCart = state.product
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, product: tempCart };
  }

  if (action.type === 'GET_TOTAL') {
    let { total, amount } = state.product.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }

  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }
  if (action.type === 'FETCH_PRODUCT') {
    return { ...state, product: action.payload, loading: false };
  }
  throw new Error('there is something wrong');
};

export default reducer;
