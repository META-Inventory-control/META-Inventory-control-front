import { FiSearch } from "react-icons/fi";
import { AiOutlineCreditCard, AiOutlineUnorderedList } from "react-icons/ai";
import { BsListNested } from "react-icons/bs";
import { StyledSearchBar } from "./styles";
import { iProduct, ProductsContext } from "../../contexts/productsContext";
import { useContext, useState } from "react";
import { GroupsContext } from "../../contexts/groupsContext";
import ReactSwitch from "react-switch";

export const SearchBar = () => {
  const { products, setFilteredProducts, listMode, setListMode } =
    useContext(ProductsContext);
  const { groups } = useContext(GroupsContext);
  const [searchValue, setSearchValue] = useState("");

  const handleWrittenFilteredProducts = () => {
    const newFilter = products?.filter(
      (prod) =>
        prod.name.toLowerCase().includes(searchValue) ||
        searchValue.toLocaleLowerCase() == "mt" + prod.code.toLocaleLowerCase()
    );
    setFilteredProducts(newFilter!);
  };

  const handleWrittenSearchValue = (value: string) => {
    if (value === "") {
      setFilteredProducts([]);
      setSearchValue("");
    } else {
      setSearchValue(value.toLowerCase());
    }
  };

  const handleGroupsFilteredProducts = (value: string) => {
    const newFilter = products?.filter((prod) => prod.group === value);
    setFilteredProducts(newFilter!);

    if (!newFilter?.length) {
      setFilteredProducts(null);
    }
  };

  const resetSearch = () => {
    setFilteredProducts([]);
  };

  const lowQty = () => {
    const arrayFiltered = products?.filter(
      (product) => product.qty <= product.min_qty
    );
    setFilteredProducts(arrayFiltered!);

    if (!arrayFiltered?.length) {
      setFilteredProducts(null);
    }
  };

  const aaa = () => {
    setListMode(!listMode);
  };

  return (
    <StyledSearchBar>
      <div className="switchButton">
        <ReactSwitch
          checked={listMode}
          onChange={aaa}
          uncheckedIcon={<AiOutlineCreditCard color="white" />}
          checkedIcon={<BsListNested color="white" />}
          onColor="#428af5"
        ></ReactSwitch>
      </div>
      <div>
        <input
          type="text"
          placeholder="Buscar"
          onChange={(e) => handleWrittenSearchValue(e.target.value)}
        />
        <FiSearch
          size={30}
          onClick={() => handleWrittenFilteredProducts()}
        ></FiSearch>
      </div>
      <div>
        <ul>
          {groups ? (
            <>
              <li className="showAllCard" onClick={() => resetSearch()}>
                <h3>Mostrar todos</h3>
              </li>
              <li className="showLowQty" onClick={() => lowQty()}>
                <h3>Qtd. Baixa</h3>
              </li>
              {groups.map((group) => (
                <li
                  key={group.id}
                  onClick={() => handleGroupsFilteredProducts(group.id)}
                >
                  <h3>{group.group_name}</h3>
                </li>
              ))}
            </>
          ) : (
            <li>
              <h3>Ainda não há grupos</h3>
            </li>
          )}
        </ul>
      </div>
    </StyledSearchBar>
  );
};
