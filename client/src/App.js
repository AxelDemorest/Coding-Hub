import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/inscription" element={<Register />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
