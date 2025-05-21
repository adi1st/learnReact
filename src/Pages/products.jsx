import { Fragment, useState } from "react";
import Button from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/images/cloth1.jpg",
    name: "Basic Knit",
    price: 560000,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit.
          Aperiam ut quae veniam, quisquam facilis, dolore enim quasi ipsum
          incidunt aspernatur ducimus reiciendis numquam itaque, eius sequi
          sapiente eveniet.`,
  },
  {
    id: 2,
    image: "/images/cloth2.jpg",
    name: "Crop Blazer",
    price: 760000,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit.
          Aperiam ut quae veniam, quisquam facilis, dolore enim quasi ipsum
          incidunt aspernatur ducimus reiciendis numquam itaque.`,
  },
  {
    id: 3,
    image: "/images/cloth1.jpg",
    name: "Basic Knit New",
    price: 560000,
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit.
          Aperiam ut quae veniam, quisquam facilis.`,
  },
];

const email = localStorage.getItem("email");

export default function ProductsPage() {
  const [cart, setCart] = useState([{ id: 1, qty: 1 }]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id: id, qty: 1 }]);
    }
  };

  return (
    <>
      <div className="flex justify-end h-15 bg-blue-600 text-white items-center px-10">
        Halo, {email}
        <Button
          classname="border border-white ml-5 hover:bg-white hover:text-blue-600"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );

                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      {product.price.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
