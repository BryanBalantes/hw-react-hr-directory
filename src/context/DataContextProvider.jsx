/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const getStoredData = () => {
    let data = localStorage.getItem("data");
    let json = JSON.parse(data);
    if (json) {
      return json;
    }
    return [];
  };
  const [data, setData] = useState(getStoredData);
  const [modalOpen, setModalOpen] = useState(false);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [dataToView, setdataToView] = useState(getStoredData);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const submit = (newData) => {
    dataToEdit === null
      ? setData([...data, newData])
      : setData(
          data.map((currData, index) => {
            if (index !== dataToEdit) return currData;

            return newData;
          })
        );
  };

  const handleDeleteRow = (targetIndex) => {
    setData(data.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setDataToEdit(index);
    setModalOpen(true);
  };

  const handleViewData = (index) => {
    setdataToView(index);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        submit,
        handleDeleteRow,
        modalOpen,
        setModalOpen,
        handleEditRow,
        dataToEdit,
        getStoredData,
        handleViewData,
        dataToView,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
