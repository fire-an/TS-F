import instance from "./instance";
import { IProduct } from "../types/product";

const getAllProducts = () => {
  return instance.get("/products");
};
const getProduct = (id: number) => {
  return instance.get("/products/" + id);
};
const addProduct = (product: IProduct) => {
  return instance.post("/products", product);
};
const updateProduct = (product: IProduct) => {
  return instance.patch("/products/" + product.id, product);
};
const deleteProduct = (id: number) => {
  return instance.delete("/products/" + id);
};

export { getAllProducts, getProduct, addProduct, updateProduct, deleteProduct };
