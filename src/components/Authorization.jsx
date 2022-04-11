import '../styles/Registration.css'
import Input from "./Input";
import {useState} from "react";
import {authorization} from "../actions/user";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

function Authorization() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="Registration">
            <div className="Registration-Header">Вход</div>
            <Input value={username} setValue={setUsername} type="text" placeholder="Введите логин"/><br></br>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/><br></br>
            <button className="Registration-Button" onClick={() => authorization(username, password)}>Войти</button>
            <button className="Registration-Button"><NavLink to="/registration">Зарегистрироваться</NavLink></button>
        </div>
    )
}

export default Authorization;