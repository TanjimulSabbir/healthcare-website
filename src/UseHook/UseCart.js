import React, { useState } from 'react';

const UseCart = () => {
    const [cart, setCart] = useState(0);

    const ShopAddToCard = () => {
        const count = cart + 1
        setCart(count)
        console.log(cart, "cart")
    }
    localStorage.setItem("cart", cart)
    return { cart, setCart, ShopAddToCard }
};

export default UseCart;