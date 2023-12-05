import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Pages/Details/Details";
import FacilityDetails from "./Pages/FacilityDetails/FacilityDetails";
import BussinessCheck from "./Pages/BussinessCheck/BussinessCheck";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/details" caseSensitive element={<Details />}></Route>
          <Route
            path="/facilityDetails"
            caseSensitive
            element={<FacilityDetails />}
          ></Route>
          <Route
            path="/bussinessCheck"
            caseSensitive
            element={<BussinessCheck />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
