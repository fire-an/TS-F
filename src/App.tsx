import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { IProduct } from "./types/product";
import {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} from "./api/product";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductManagementPage from "./pages/admin/ProductManagementPage";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import Signin from "./pages/SignInpage";
import Signup from "./pages/SignUpPage";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data));
  }, []);
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(({ data }) => setProducts(data));
  };
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(({ data }) => setProducts(data));
  };
  const onHandleRemove = (id: number) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter((item: IProduct) => item.id != id));
    });
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />}></Route>
          <Route
            path="products"
            element={<ProductPage products={products} />}
          ></Route>
          <Route
            path="products/:id"
            element={<ProductDetailPage products={products} />}
          ></Route>
          <Route path="signin" element={<Signin />}></Route>
          {/* <Route path="signup" element={<Signup />}></Route> */}
        </Route>
        <Route path="/admin/products">
          <Route
            index
            element={
              <ProductManagementPage
                products={products}
                onRemove={onHandleRemove}
              />
            }
          ></Route>
          <Route
            path="add"
            element={<AddProductPage onAdd={onHandleAdd} />}
          ></Route>
          <Route
            path=":id/update"
            element={
              <UpdateProductPage
                products={products}
                onUpdate={onHandleUpdate}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
