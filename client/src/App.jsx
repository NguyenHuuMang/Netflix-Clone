import "./app.scss"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <Routes>
        <Route exact path="/">
         <Home /> 
        </Route>
        <Route path="/movies">
          <Home />
        </Route>
        <Route  path="/">
            <Home />
        </Route>
    </Routes>
  )
};

export default App;