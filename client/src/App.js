import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/inscription" element={<Register />}/>
          <Route exact path="/connexion" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
