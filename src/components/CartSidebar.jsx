import React from 'react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { items, isOpen, toggleCart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (!isOpen) return null;

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, parseInt(newQuantity));
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={toggleCart}
      />
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-premium-md z-50 flex flex-col border-l border-primary/10">
        <div className="flex items-center justify-between p-4 border-b border-primary/10">
          <h3 className="text-lg font-semibold text-primary">Your Cart</h3>
          <button
            onClick={toggleCart}
            className="text-dwm-text-mid hover:text-primary text-2xl leading-none"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="text-center py-8 text-dwm-text-mid">
              Your cart is empty.<br />
              Explore our marketplace!
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 bg-dwm-off-white rounded-xl">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-primary">{item.name}</h4>
                    <p className="text-accent font-semibold">
                      {item.currency} {item.price.toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <label htmlFor={`quantity-${item.id}`} className="text-sm text-dwm-text-mid">
                        Qty:
                      </label>
                      <input
                        id={`quantity-${item.id}`}
                        type="number"
                        min="1"
                        max="99"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-16 px-2 py-1 border border-primary/15 rounded-xl text-center"
                      />
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-primary/10 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-primary">Total</span>
              <span className="amount text-xl font-bold text-accent">
                {items[0]?.currency || 'RWF'} {getTotalPrice().toLocaleString()}
              </span>
            </div>
            <button 
              className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#b58226] hover:shadow-premium-sm"
              onClick={() => {
                // Handle checkout logic here
                alert('Checkout functionality would be implemented here');
              }}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
