import {current_user} from "../actions/current_user";
import not_image from "../images/not_image.png"
import {NavLink} from "react-router-dom";
import "../styles/Main.css"
import Input from "./Input";
import {useState} from "react";
import search from '../images/search.png'

function Main(){
    let data = current_user()
    let chats
    chats = JSON.parse(sessionStorage.getItem("chats"))
    const [value, setValue] = useState("")
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
                        <NavLink to={"/chats/"+chat.chat_id}>
                        <div className="Chat">
                            <tr>
                                <th width="48">
                                    <div className="Left">
                                        <div className="Image">
                                            {!chat.chat_image && <img alt="" src={not_image}/>}
                                            {chat.chat_image && <img alt="" src={"http://localhost:5000/"+chat.chat_image} width="48"/>}
                                        </div>
                                    </div>
                                </th>
                                <th width="400">
                                    <div className="Right">
                                        <div className="Name">{chat.chat_name}</div>
                                        {sessionStorage.getItem("username") === chat.admin.username && <button className="Update"><NavLink to={"/chats/"+chat.chat_id+"/update"}>Редактировать</NavLink></button>}
                                        {sessionStorage.getItem("username") === chat.admin.username && <button className="Delete"><NavLink to={"/chats/"+chat.chat_id+"/delete"}>Удалить</NavLink></button>}
                                        {sessionStorage.getItem("username") !== chat.admin.username && <button className="Delete"><NavLink to={"/chats/"+chat.chat_id+"/left"}>Покинуть чат</NavLink></button>}
                                    </div>
                                </th>
                            </tr>
                        </div>
                            </NavLink>
                    )}
                </table>
        </div>
    )
}

export default Main