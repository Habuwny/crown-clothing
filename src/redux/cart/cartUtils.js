const addToCart = (cartItems, itemToAdd) => {
  const existen = cartItems.find(item => {
      return item.id === itemToAdd.id
  })


    if (existen) {
        return cartItems.map(item =>
            item.id === itemToAdd.id
            ? {...item, quantity: item.quantity + 1}
            : item
        )
    }

    return [...cartItems, {...itemToAdd,  quantity: 1}]
};

export default addToCart;