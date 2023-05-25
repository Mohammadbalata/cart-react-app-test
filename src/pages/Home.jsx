import ProductCard from "../components/ProductCard";
import { useProductContext } from "../contexts/productContext";
import { productes } from "../mocks/productes";

const Home = () => {
  const cart = useProductContext();
  console.log(cart);
  return (
    <div>
      <ul>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
          {productes.map(
            (product) => (
              <ProductCard key={product.id} {...{ product }} /> //==>>the same as product={product}
            ) 
          )}
        </div>
      </ul>
    </div>
  );
};

export default Home;
