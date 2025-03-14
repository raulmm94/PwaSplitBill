import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import ManageParticipants from "./routes/ManageParticipants";
import SelectMethod from "./routes/SelectMethod";
import ManualDivision from "./routes/ManualDivision";
import SetTotal from "./routes/SetTotal";
import EqualDivision from "./routes/EqualDivision";
import AddItemScreen from "./routes/AddItemScreen";
import FinalSummary from "./routes/FinalSummary";

function App() {
  console.log("App Component Rendered");

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/manage-participants" element={<ManageParticipants />} />
      <Route path="/set-total" element={<SetTotal />} />
      <Route path="/select-method" element={<SelectMethod />} />
      <Route path="/manual-division" element={<ManualDivision />} />
      <Route path="/equal-division" element={<EqualDivision />} />
      <Route path="/add-item-screen" element={<AddItemScreen />} />
      <Route path="/final-summary" element={<FinalSummary />} />
    </Routes>
  );
}

export default App;
