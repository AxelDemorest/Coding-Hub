import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./views/Register";
import Home from "./views/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/inscription" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
