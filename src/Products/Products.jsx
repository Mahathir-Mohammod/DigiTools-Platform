import { useState } from "react";

// 1. Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FileText, Layers, Image, Zap, User, BarChart2,
  ShoppingCart, Trash2, Package, Star, Sparkles
} from "lucide-react";

const ICON_MAP = { FileText, Layers, Image, Zap, User, BarChart2, Package, Star, Sparkles };

const TAG_LABELS = {
  new: "New",
  popular: "Popular",
  "best-seller": "Best Seller",
  bestseller: "Best Seller",
};

const TAG_STYLES = {
  new: "bg-[#d1fae5] text-[#065f46]",
  popular: "bg-[#ede9fe] text-[#6d28d9]",
  "best-seller": "bg-[#fef3c7] text-[#92400e]",
  bestseller: "bg-[#fef3c7] text-[#92400e]",
};

function createResource(promise) {
  let status = "pending";
  let result;
  const suspender = promise.then(
    (data) => { status = "success"; result = data; },
    (err)  => { status = "error";   result = err;  }
  );
  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "error")   throw result;
      return result;
    },
  };
}

const productsResource = createResource(
  fetch("/data.json").then((res) => res.json())
);

function ProductList({ cart, onAdd }) {
  const products = productsResource.read();
  const renderIcon = (iconName) => {
    const Icon = ICON_MAP[iconName] || Package;
    return <Icon size={35} />;
  };

  return (
    <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const inCart = cart.find((item) => item.id === product.id);
        const tagType = product.tagType || product.tag;
        return (
          <div key={product.id} className="group relative flex flex-col rounded-[14px] border border-[#e5e7eb] bg-white p-6 pb-5 transition-all duration-200 ease-in hover:-translate-y-1">
            {product.tag && (
              <span className={`absolute right-3.5 top-3.5 rounded-full px-2.5 py-1 text-[0.68rem] font-bold tracking-wider ${TAG_STYLES[tagType] || "bg-gray-100 text-gray-600"}`}>
                {TAG_LABELS[product.tag] || product.tag}
              </span>
            )}
            <div className="mb-3.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f3ff] text-[#7c3aed]">
              {renderIcon(product.icon)}
            </div>
            <h3 className="mb-1.5 text-[0.95rem] font-bold text-[#111827]">{product.name}</h3>
            <p className="mb-3.5 text-[0.78rem] leading-relaxed text-[#6b7280]">{product.description}</p>
            <div className="mb-3.5 flex items-baseline gap-0.5">
              <span className="text-2xl font-bold tracking-tighter text-[#111827] leading-none">
                {product.price === 0 ? "Free" : `$${product.price}`}
              </span>
              {product.price > 0 && (
                <span className="text-[0.75rem] font-medium text-[#9ca3af]">
                  {product.period === "one-time" ? " One-Time" : `/${product.period}`}
                </span>
              )}
            </div>
            <ul className="mb-5 flex flex-1 flex-col gap-1.5 list-none p-0">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-[0.78rem] text-[#374151]">
                  <span className="font-bold text-[#7c3aed]">✓</span> {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2.5 rounded-full text-[0.85rem] font-semibold transition-all duration-200 cursor-pointer
                ${inCart
                  ? "bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed shadow-none"
                  : "bg-[#7c3aed] text-white shadow-[0_3px_10px_rgba(124,58,237,0.3)] hover:bg-[#6d28d9] hover:-translate-y-px hover:shadow-[0_5px_16px_rgba(124,58,237,0.4)] active:translate-y-0"}`}
              onClick={() => onAdd(product)}
              disabled={!!inCart} > {inCart ? "Added to Cart" : "Buy Now"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default function Products() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 1500,
    });

    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id, name) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error(`${name} removed from cart.`, {
      position: "top-right",
      autoClose: 1500,
    });
  };

  const handleCheckout = () => {
    toast.info("Proceeding to checkout...", {
      position: "top-center",
      autoClose: 1500,
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const renderIcon = (iconName) => {
    const Icon = ICON_MAP[iconName] || Package;
    return <Icon size={35} />;
  };

  return (
    <section className="bg-[#f9fafb] px-5 py-[72px] md:px-8 lg:px-20 min-h-[500px]">
      
      <ToastContainer />

      <div className="mb-12 text-center">
        <h2 className="text-[40px] font-bold tracking-tight text-[#111827] mb-3">
          Premium Digital Tools
        </h2>
        <p className="text-[0.9rem] text-[#6b7280] mb-7 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="inline-flex items-center gap-1 bg-[#f3f4f6] p-1 rounded-full">
          <button
            className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[0.9rem] font-medium transition-all duration-200 cursor-pointer
              ${activeTab === "products" ? "bg-[#7c3aed] text-white" : "text-[#6b7280] hover:text-[#111827]"}`}
            onClick={() => setActiveTab("products")}> Products
          </button>
          <button
            className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-[0.9rem] font-medium transition-all duration-200 cursor-pointer
              ${activeTab === "cart" ? "bg-[#7c3aed] text-white" : "text-[#6b7280] hover:text-[#111827]"}`}
            onClick={() => setActiveTab("cart")}>
            <ShoppingCart size={14} />
            Cart {cart.length > 0 && `(${cart.length})`}
          </button>
        </div>
      </div>

      {activeTab === "products" && <ProductList cart={cart} onAdd={addToCart} />}

      {activeTab === "cart" && (
        <div className="mx-auto max-w-[700px] rounded-2xl border border-[#e5e7eb] bg-white p-6 sm:p-8">
          <h3 className="mb-6 text-[1.1rem] font-bold text-[#111827]">Your Cart</h3>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center gap-3 py-12 text-[#9ca3af]">
              <ShoppingCart size={40} strokeWidth={1.5} />
              <p className="text-[0.9rem]">Your cart is empty</p>
              <button
                className="mt-2 rounded-full bg-[#7c3aed] px-6 py-2.5 text-[0.85rem] font-semibold text-white transition-colors hover:bg-[#6d28d9] cursor-pointer"
                onClick={() => setActiveTab("products")}> Browse Products
              </button>
            </div> 
          ) : ( 
            <>
              <div className="flex flex-col">
                {cart.map((item) => (
                  <div className="flex items-center gap-4 border-b border-[#f3f4f6] py-4 last:border-0" key={item.id}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f5f3ff] text-[#7c3aed]">
                      {renderIcon(item.icon)}
                    </div>

                    <div className="flex flex-1 flex-col">
                      <span className="text-[0.88rem] font-semibold text-[#111827]">{item.name}</span>
                      <span className="text-[0.78rem] text-[#6b7280]">
                        {item.price === 0 ? "Free" : `$${item.price}`}
                      </span>
                    </div>

                    <button
                      className="flex items-center gap-1 rounded-md px-2 py-1 text-[0.78rem] font-medium text-[#ef4444] transition-all hover:bg-[#fef2f2] hover:opacity-70 cursor-pointer"
                      onClick={() => removeFromCart(item.id, item.name)}>
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center justify-between border-t border-[#e5e7eb] pt-2 text-[0.9rem] font-medium text-[#374151]">
                  <span>Total</span>
                  <span className="text-[1.2rem] font-bold text-[#111827]">${total}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full rounded-full bg-[#7c3aed] py-3.5 text-[0.9rem] font-semibold text-white transition-all hover:bg-[#6d28d9] hover:-translate-y-px cursor-pointer"> Proceed To Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}