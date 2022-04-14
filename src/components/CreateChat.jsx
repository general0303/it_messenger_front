import {useState} from "react";
import Input from "./Input";
import {createChat} from "../actions/current_user";
import {NavLink, useNavigate} from "react-router-dom";
import InputFile from "./Input-file";

function CreateChat({active, setActive}) {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    return (
        <div className="Registration">
            <div className="Registration-Header">Создать чат</div>
            <Input value={name} setValue={setName} type="text" placeholder="Введите название чата"/><br></br>
            <InputFile type="file" placeholder="Введите название чата" name={name} active={active} setActive={setActive} navigate={navigate}/><br></br>
            <button className="Registration-Button" onClick={() => {createChat(name, null, navigate, active, setActive)}}><NavLink to="/">Создать</NavLink></button>
        </div>
    )
}

export default CreateChat;