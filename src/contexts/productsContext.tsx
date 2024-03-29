import api from "../services/api";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./userContext";
import { ModalsContext } from "./modalsContext";

interface iProvider {
  children: ReactNode;
}

export interface iProductAdd {
  name: string;
  entry_cost: number;
  qty: number;
  group: string;
  image: File | undefined;
  min_qty: number;
  description?: string;
}

export interface iProductEdit {
  name?: string;
  entry_cost?: number;
  final_cost?: number;
  qty?: number;
  min_qty?: number;
  group?: string;
  description?: string;
}

export interface iProduct {
  id: string;
  final_cost: number;
  final_cost_altered: boolean;
  name: string;
  entry_cost: number;
  qty: number;
  image: string;
  group: string;
  code: string;
  min_qty: number;
  description?: string | null;
}

interface iProductContextRes {
  products: iProduct[] | null;
  populateProducts: () => Promise<void>;
  addProduct: (
    data: Omit<iProductAdd, "image">,
    file: File | undefined
  ) => Promise<void>;
  editProduct: (data: iProductEdit) => Promise<void>;
  deleteProduct: () => Promise<void>;
  filteredProducts: iProduct[] | null;
  setFilteredProducts: (value: iProduct[] | null) => void;
  filteredProductsHistoric: iProduct[] | null;
  setFilteredProductsHistoric: (value: iProduct[] | null) => void;
  listMode: boolean;
  setListMode: (value: boolean) => void;
}

export const ProductsContext = createContext<iProductContextRes>(
  {} as iProductContextRes
);

export const ProductProvider = ({ children }: iProvider) => {
  const [products, setProducts] = useState([] as iProduct[]);
  const [filteredProducts, setFilteredProducts] = useState<iProduct[] | null>(
    []
  );
  const [filteredProductsHistoric, setFilteredProductsHistoric] = useState<
    iProduct[] | null
  >([]);
  const [listMode, setListMode] = useState<boolean>(false);

  const { setShowEditModal, setShowAddModal, setShowTakeOutPrModal } =
    useContext(ModalsContext);

  const populateProducts = async (): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const request = await api.get("/products/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const array = request.data;
      const novoArray = array.map((obj: { code: string }) => {
        const novoObj = Object.assign({}, obj, { ["code"]: obj.code });
        return novoObj;
      });
      setProducts(novoArray);
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (
    data: Omit<iProductAdd, "image">,
    file: File | undefined
  ): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const request = await api.post(
        "/products/",
        {
          ...data,
          image: file,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProducts([
        ...products,
        {
          name: request.data.name,
          entry_cost: request.data.entry_cost,
          qty: request.data.qty,
          min_qty: request.data.min_qty,
          image: request.data.image,
          id: request.data.id,
          final_cost: request.data.final_cost,
          final_cost_altered: request.data.final_cost_altered,
          group: request.data.group,
          code: request.data.code,
          description: request.data.description,
        },
      ]);
      setShowAddModal(false);
      toast.success("Produto criado!", { autoClose: 1500 });
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar produto!", { autoClose: 1500 });
    }
  };

  const editProduct = async (data: iProductEdit): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    const product_id = localStorage.getItem("@FOCUS_PRODUCT_ID");
    try {
      const request = await api.patch(`/products/${product_id}/`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      products.forEach((prod) => {
        if (prod.id === product_id) {
          prod.name = request.data.name;
          prod.description = request.data.description;
          prod.entry_cost = request.data.entry_cost;
          prod.final_cost = request.data.final_cost;
          prod.qty = request.data.qty;
          prod.min_qty = request.data.min_qty;
          prod.group = request.data.group;
        }
      });
      setShowEditModal(false);
      setShowTakeOutPrModal(false);
      toast.success("Sucesso ao editar produto!", { autoClose: 1500 });
    } catch (error) {
      console.log(error);
      toast.error("Erro ao editar produto!", { autoClose: 1500 });
    }
  };

  const deleteProduct = async (): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    const product_id = localStorage.getItem("@FOCUS_PRODUCT_ID");
    try {
      const request = await api.delete(`/products/${product_id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const deletedObjArr = products.filter((prod) => prod.id !== product_id);
      setProducts(deletedObjArr);
      setShowEditModal(false);
      toast.warn("Produto deletado!", { autoClose: 1500 });
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar produto!", { autoClose: 1500 });
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        populateProducts,
        addProduct,
        editProduct,
        deleteProduct,
        filteredProducts,
        setFilteredProducts,
        filteredProductsHistoric,
        setFilteredProductsHistoric,
        listMode,
        setListMode,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
