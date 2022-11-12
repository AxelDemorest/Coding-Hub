import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Home from "./views/home/Home";
import Account from "./views/account/Account";
import RequireAuth from "./components/requireAuth/RequireAuth";
import Forum from "./views/forum/Forum";
import Question from "./views/forum/question/Question";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/inscription" element={<Register />}/>
          <Route exact path="/connexion" element={<Login />}/>
          <Route exact path="/forum" element={<Forum />}/>
          <Route exact path="/question" element={<Question />}/>
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
