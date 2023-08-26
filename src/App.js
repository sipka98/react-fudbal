import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigacioniMeni from "./komponente/NavigacioniMeni";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pregled from "./stranice/Pregled";
import Timovi from "./stranice/Timovi";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigacioniMeni />

        <Routes>
            <Route path="/" element={<Pregled />} />
            <Route path="/timovi" element={<Timovi />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
