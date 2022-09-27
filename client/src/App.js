import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/home/Home";
import Account from "./views/account/Account";
import RequireAuth from "./components/requireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/inscription" element={<Register />}/>
          <Route exact path="/connexion" element={<Login />}/>
          <Route exact path="/profil" element={
              <RequireAuth>
                <Account />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
