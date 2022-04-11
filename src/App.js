import './App.css';
import './styles/Header.css'
import Header from "./components/Header";
import Menu from "./components/Menu";
import Registration from "./components/Registration";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authorization from "./components/Authorization";
import Comp from "./components/Comp";

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div className="App-Menu">
        <Menu/>
      </div>
      <div className="App-Content">
          <div className="Content">
              <BrowserRouter>
                  <Routes>
                      {!sessionStorage.getItem("token") && <Route path='/registration'  element={<Registration/>}/>}
                      {!sessionStorage.getItem("token") && <Route path='/'  element={<Authorization/>}/>}
                      {sessionStorage.getItem("token") && <Route path='/'  element={<Comp/>}/>}
                  </Routes>
              </BrowserRouter>
          </div>
      </div>
    </div>
  );
}

export default App;
