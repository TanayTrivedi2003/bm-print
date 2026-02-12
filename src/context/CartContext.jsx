import { createContext, useContext, useState } from "react";

const CartContext = createContext({
    cart: [],
    addToCart: () => { },
    updatePackQuantity: () => { },
    removeFromCart: () => { },
    clearCart: () => { },
});

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    /**
     * CORE RULES (DO NOT BREAK):
     * - quantity = number of PACKS
     * - price = price of 1 PACK
     * - packSize = cards per pack (display only)
     */

    // ✅ Add product → ALWAYS add exactly 1 pack
    // ❌ If already exists → do NOTHING (no auto increment)
    const addToCart = (product, variant) => {
        setCart((prev = []) => {
            const exists = prev.some(
                (item) => item.variantId === variant.id
            );

            if (exists) return prev;

            return [
                ...prev,
                {
                    productId: product.id,
                    variantId: variant.id,
                    title: product.title,
                    variantTitle: variant.title,
                    price: Number(variant.price),          // price of 1 pack
                    quantity: 1,                            // start with 1 pack
                    packSize: variant.minQuantity || 100,   // cards per pack
                    image: product.images?.[0]?.src,
                },
            ];
        });
    };

    // ✅ ONLY place where pack quantity can change
    const updatePackQuantity = (variantId, newQty) => {
        if (newQty < 1) return;

        setCart((prev = []) =>
            prev.map((item) =>
                item.variantId === variantId
                    ? { ...item, quantity: newQty }
                    : item
            )
        );
    };

    const removeFromCart = (variantId) => {
        setCart((prev = []) =>
            prev.filter((item) => item.variantId !== variantId)
        );
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                updatePackQuantity,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
