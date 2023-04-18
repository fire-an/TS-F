import React from "react";
import { IProduct } from "../../types/product";
import { Space, Table, Button, Popconfirm } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
type Props = {};

interface IProps {
  products: IProduct[];
  onRemove: (id: number) => void;
}
interface DataType {
  key: string | number;
  id: number;
  name: string;
  price: number;
  cateId: number;
}

const ProductManagementPage = (props: IProps) => {
  const removeProduct = (id: number) => {
    props.onRemove(id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Product Category",
      dataIndex: "cateId",
      key: "cateId",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            title="Delete product"
            description="Are you sure?"
            onConfirm={() => removeProduct(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" style={{ backgroundColor: "red" }}>
              Remove
            </Button>
          </Popconfirm>
          <Button type="primary">
            <Link to={`/admin/products/${record.id}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];
  const data: DataType[] = props.products.map((item: IProduct) => {
    return {
      key: item.id,
      ...item,
    };
  });
  return (
    <div>
      <Button type="primary">
        <Link to={"/admin/products/add"}>Add New Product</Link>
      </Button>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ProductManagementPage;
