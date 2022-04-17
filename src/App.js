import './App.css';
import './styles/Header.css'
import Header from "./components/Header";
import Menu from "./components/Menu";
import Registration from "./components/Registration";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Authorization from "./components/Authorization";
import Main from "./components/Main";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <header>
                <Header/>
            </header>
            <div className="App-Menu">
                <Menu/>
            </div>
            <div className="App-Content">
                <div className="Content">
                  <Routes>
                      {!sessionStorage.getItem("token") && <Route path='/registration'  element={<Registration/>}/>}
                      {!sessionStorage.getItem("token") && <Route path='/'  element={<Authorization/>}/>}
                      {sessionStorage.getItem("token") && <Route path='/'  element={<Main/>}/>}
                      {sessionStorage.getItem("token") && <Route path='/chats/:chat_id'  element={<Chat/>}/>}
                      {!sessionStorage.getItem("token") && <Route path='/chats/:chat_id'  element={<Authorization/>}/>}
                  </Routes>
                </div>
            </div>
         </BrowserRouter>
    </div>
  );
}

export default App;
