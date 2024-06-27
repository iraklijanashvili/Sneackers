import ProductList from "./Components/ProductList";
import Product5 from "./assets/productImage5.png";
import Product3 from "./assets/productImage3.png";

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
    name: "CitrusStride Classic",
    price: "149$",
    image: Product3,
  },
];

export default function Men(): JSX.Element {
  return <ProductList title="WOMEN'S" products={menProducts} />;
}
