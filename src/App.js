import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home.js";
import { Hotel } from "./pages/hotel/Hotel.js";
import { List } from "./pages/list/List.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<Hotel />}/>
        <Route path="/hotels/:id" element={<List />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
