import { BrowserRouter, Routes, Route } from "react-router-dom";
import College from "./Components/College";
import Event from "./Components/Events";

function App() {
  return (
    <div>

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Event />} />
                <Route path="/colleges" element={<College />} />

            </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
