import {useState} from "react";
import Input from "./Input";
import {updateCurrentUser} from "../actions/current_user";
import {NavLink} from "react-router-dom";
import InputAvatar from "./InputAvatar";

function UpdateUser({active, setActive}) {
    const [username, setUserName] = useState("")
    return (
        <div className="Registration">
            <div className="Registration-Header">Редактировать профиль</div>
            <Input value={username} setValue={setUserName} type="text" placeholder="Введите новое имя пользователя"/><br></br>
            <InputAvatar type="file" placeholder="Введите название чата" name={username} active={active} setActive={setActive}/><br></br>
            <button className="Registration-Button" onClick={() => {updateCurrentUser(username, null, active, setActive)}}><NavLink to="/">Подтвердить</NavLink></button>
        </div>
    )
}

export default UpdateUser;