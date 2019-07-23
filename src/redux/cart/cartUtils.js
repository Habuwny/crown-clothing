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

export const removeItemFromCart = (cartItems, toRemove) =>{
    const exist = cartItems.find(
        cartItem => cartItem.id === toRemove.id
    )
    
    if (exist.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== toRemove.id)
    }
    return cartItems.map(
        item => item.id === toRemove.id ?
            {...item, quantity: item.quantity -1 }
            : item

    );
};



export default addToCart;