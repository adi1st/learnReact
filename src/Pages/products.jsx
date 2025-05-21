import Button from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    image: "/images/cloth1.jpg",
    name: "Basic Knit",
    price: "560.000",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit.
          Aperiam ut quae veniam, quisquam facilis, dolore enim quasi ipsum
          incidunt aspernatur ducimus reiciendis numquam itaque, eius sequi
          sapiente eveniet.`,
  },
  {
    id: 2,
    image: "/images/cloth2.jpg",
    name: "Crop Blazer",
    price: "760.000",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit.
          Aperiam ut quae veniam, quisquam facilis, dolore enim quasi ipsum
          incidunt aspernatur ducimus reiciendis numquam itaque.`,
  },
  {
    id: 3,
    image: "/images/cloth1.jpg",
    name: "Basic Knit New",
    price: "560.000",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, sit.
          Aperiam ut quae veniam, quisquam facilis.`,
  },
];

export default function ProductsPage() {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.desc}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
}
