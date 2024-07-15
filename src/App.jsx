// libraries
import { Routes, Route } from "react-router-dom";

// layouts
import ProtectedLayout from "./layout/ProtectedLayout";
import PublicLayout from "./layout/PublicLayout";

// pages
import Home from "./layout/page/Home";
import FormPage from "./layout/page/FormPage";
import EmployeeInfoPage from "./layout/page/EmployeeInfoPage";
import NotFound from "./layout/page/NotFound";

// style
import "./layout/style/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path="/employeeinfopage" element={<EmployeeInfoPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
