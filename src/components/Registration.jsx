import '../styles/Registration.css'
import Input from "./Input";
import {useState} from "react";
import {registration} from "../actions/user";
import {NavLink} from "react-router-dom";

function Registration() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className="Registration">
            <div className="Registration-Header">Регистрация</div>
            <Input value={username} setValue={setUsername} type="text" placeholder="Введите логин"/><br></br>
            <Input value={email} setValue={setEmail} type="text" placeholder="Введите email"/><br></br>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль"/><br></br>
            <button className="Registration-Button" onClick={() => registration(username, email, password)}><NavLink to="/">Зарегистрироваться</NavLink></button>
            <p>Если у вас уже есть аккаунт, нажмите <NavLink to="/">Войти</NavLink></p>
        </div>
    )
}

export default Registration;