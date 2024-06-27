import ProductList from "./Components/ProductList";
import Product5 from "./assets/productImage5.png";
import Product6 from "./assets/productImage6.png";
import Product7 from "./assets/productImage7.png";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

const menProducts: ProductCardProps[] = [
  {
    name: "Fall Limited Edition Sneakers",
    price: "125$",
    image: Product5,
  },
  {
    name: "EmberStride Classic",
    price: "125$",
    image: Product6,
  },
  {
    name: "EmberStride MAX",
    price: "125$",
    image: Product7,
  },
];

export default function Men(): JSX.Element {
  return <ProductList title="MEN'S" products={menProducts} />;
}
