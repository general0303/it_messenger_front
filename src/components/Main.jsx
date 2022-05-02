import {current_user} from "../actions/current_user";
import not_image from "../images/not_image.png"
import {NavLink} from "react-router-dom";
import "../styles/Main.css"
import Input from "./Input";
import {useState} from "react";
import search from '../images/search.png'
import {deleteChat, leftChat} from "../actions/chat";
import Model from "./Model";
import UpdateChat from "./UpdateChat";

function Main(){
    current_user()
    let chats
    chats = JSON.parse(sessionStorage.getItem("chats"))
    const [value, setValue] = useState("")
    const [modelActive, setModelActive] = useState(false)
    if (!chats) {
        return
    }
    const filteredChats = chats.filter(chat => {
        return chat.chat_name.toLowerCase().includes(value.toLowerCase())
    })



    return (
        <div>
            <br></br>
            <form className="Search-form">
                <table>
                    <tr>
                        <th>
                            <Input value={value} setValue={setValue} type="text" placeholder="Найти чат"/>
                        </th>
                        <th>
                            <img alt="" src={search}/>
                        </th>
                    </tr>
                </table>
            </form>
                <table>
                    {filteredChats.map(chat =>
                        <div className="Chat">
                            <tr>
                                <th width="48">
                                    <div className="Left">
                                        <NavLink to={"/chats/"+chat.chat_id}>
                                        <div className="Image">
                                            {!chat.chat_image && <img alt="" src={not_image}/>}
                                            {chat.chat_image && <img alt="" src={"https://it-messenger-back.herokuapp.com/"+chat.chat_image} width="48"/>}
                                        </div>
                                            </NavLink>
                                    </div>
                                </th>
                                <th width="400">
                                    <div className="Right">
                                        <NavLink to={"/chats/"+chat.chat_id}>
                                            <div className="Name">{chat.chat_name}</div>
                                        </NavLink>
                                        {sessionStorage.getItem("username") === chat.admin.username && <button className="Update" onClick={() => setModelActive(true)}>Редактировать</button>}
                                        {sessionStorage.getItem("username") === chat.admin.username && <button className="Delete" onClick={() => deleteChat(chat.chat_id)}>Удалить</button>}
                                        {sessionStorage.getItem("username") !== chat.admin.username && <button className="Delete" onClick={() => leftChat(chat.chat_id)}>Покинуть чат</button>}
                                        <Model active={modelActive} setActive={setModelActive}>
                                            <UpdateChat active={modelActive} setActive={setModelActive} chat_name={chat.chat_name} chat_id={chat.chat_id}/>
                                        </Model>
                                    </div>
                                </th>
                            </tr>
                        </div>
                    )}
                </table>
        </div>
    )
}

export default Main