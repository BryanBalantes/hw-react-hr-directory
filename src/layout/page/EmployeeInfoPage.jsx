/* eslint-disable react/prop-types */
import "../style/EmployeeInfoPage.css";
import { Link } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import Modal from "../../components/Modal";

const EmployeeInfoPage = () => {
  const {
    data,
    handleDeleteRow,
    modalOpen,
    setModalOpen,
    handleEditRow,
    dataToEdit,
    dataToView,
  } = useContext(DataContext);

  return (
    <div className="table-wrapper">
      <h1>Employees Personal Information </h1>
      <table className="table">
        <Link to="/home" className="goBack">
          Back to Dashboard
        </Link>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Emergency Contact Person</th>
            <th>Emergency Contact Number</th>
            <th>Actions</th>
            <th className="expand"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas, index) => (
            <tr key={index}>
              {index === dataToView ? (
                <>
                  <td>{datas.name}</td>
                  <td>{datas.email}</td>
                  <td>{datas.role}</td>
                  <td>{datas.emergencyContactPerson}</td>
                  <td>{datas.emergencyContactNumber}</td>
                  <td>
                    <span className="actions">
                      <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => handleDeleteRow(index)}
                      />
                      <BsFillPencilFill onClick={() => handleEditRow(index)} />
                    </span>
                  </td>
                </>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {modalOpen && (
        <Modal
          closeModal={() => setModalOpen(false)}
          defaultValue={dataToEdit !== null && data[dataToEdit]}
        />
      )}
    </div>
  );
};

export default EmployeeInfoPage;
