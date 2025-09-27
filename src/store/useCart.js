import { create } from "zustand";

export const useCart = create((set, get) => ({
  products: [],
  cartQuantity: {},

  fetchProducts: async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      const initialQuantities = {};
      data.forEach((product) => {
        initialQuantities[product.id] = 0;
      });

      set({ products: data, cartQuantity: initialQuantities });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  updateCartQuantity: (productId, quantity) => {
    if (quantity < 0) return;
    set((state) => ({
      cartQuantity: {
        ...state.cartQuantity,
        [productId]: quantity,
      },
    }));
  },

  getTotalItems: () => {
    const cartQuantity = get().cartQuantity;
    return Object.values(cartQuantity).reduce((total, qty) => total + qty, 0);
  },

  getGrandTotal: () => {
    return get().products.reduce((total, product) => {
      const qty = get().cartQuantity[product.id] || 0;
      return total + product.price * qty;
    }, 0);
  },

  checkout: () => {
    const totalItems = get().getTotalItems();
    const grandTotal = get().getGrandTotal();

    if (totalItems === 0) {
      return { success: false, message: "Keranjang masih kosong!" };
    }

    const resetQuantities = {};
    get().products.forEach((p) => {
      resetQuantities[p.id] = 0;
    });
    set({ cartQuantity: resetQuantities });

    return {
      success: true,
      message: `Checkout berhasil! ${totalItems} item, total $${grandTotal.toFixed(
        2
      )}`,
    };
  },
}));
