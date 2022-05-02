import {useState} from "react";
import Input from "./Input";
import {updateChat} from "../actions/current_user";
import {NavLink, useNavigate} from "react-router-dom";

function UpdateChat(active, setActive, chat_name, chat_id) {
    const [name, setName] = useState(chat_name)
    const navigate = useNavigate()
    console.log(chat_name)
    console.log(chat_id)
    return (
        <div className="Registration">
            <div className="Registration-Header">Изменить чат</div>
            <Input value={name} setValue={setName} type="text" placeholder="Введите название чата"/><br></br>
            <button className="Registration-Button" onClick={() => {updateChat(name, chat_id, navigate, active, setActive)}}><NavLink to="/">Подтвердить</NavLink></button>
        </div>
    )
}

export default UpdateChat;