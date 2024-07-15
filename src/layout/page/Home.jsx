/* eslint-disable react/prop-types */
import "../style/Home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

const Home = () => {
  const { data, handleViewData } = useContext(DataContext);

  return (
    <div className="table-wrapper">
      <h1>List of Employees</h1>
      <table className="tables">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datas, index) => (
            <tr key={index}>
              <td style={{ paddingLeft: "50px" }}>
                <Link to="/employeeinfopage" style={{ color: "#000" }} onClick={() => handleViewData(index)}>
                  {datas.name}
                </Link>
              </td>
              <td style={{ paddingLeft: "70px" }}>{datas.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
