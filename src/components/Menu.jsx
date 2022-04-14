import '../styles/Menu.css'
import {NavLink} from "react-router-dom";
import {current_user_chats} from "../actions/current_user";

function Menu() {
    if (sessionStorage.getItem("token")) {
        let chats
        current_user_chats()
        chats = JSON.parse(sessionStorage.getItem("chats"))
        console.log(chats)
        chats.map(chat => console.log(chat))
        if (!chats){
            return (
                <div className="Menu">
                    <div className="Menu-Content">
                        <ul>
                            <li><NavLink to="/">Главная</NavLink></li>
                        </ul>
                    </div>
                </div>
            )
        }
        return (
            <div className="Menu">
                <div className="Menu-Content">
                    <ul>
                        <li><NavLink to="/">Главная</NavLink></li>
                        {chats.map(chat =>
                                <li key={chat.chat_id}><NavLink to={"/chats/" + chat.chat_id}>{chat.chat_name}</NavLink></li>
                        )}
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div className="Menu">
                <div className="Menu-Content">
                    <ul>
                        <li><NavLink to="/">Авторизация</NavLink></li>
                        <li><NavLink to="/registration">Регистрация</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Menu;