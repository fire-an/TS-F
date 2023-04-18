import { useEffect, useState } from "react";
import { IProduct } from "../types/product";
interface IProps {
  products: IProduct[];
}
const ProductPage = (props: IProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  return (
    <div>
      <h1>Product Page</h1>
      <div>
        {data.map((product) => {
          return (
            <div key={product.id}>
              <a href={"/products/" + product.id}>{product.name}</a>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
