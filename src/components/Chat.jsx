import {current_user} from "../actions/current_user";
import {useState} from "react";
import Input from "./Input";
import search from "../images/search.png";
import {NavLink} from "react-router-dom";
import not_image from "../images/not_image.png";
import send from "../images/send.png"

function Chat(){
    const [value, setValue] = useState("")
    return (
        <div>
            <br></br>
            <table>
                <div className="Message">
                    <tr>
                        <th width="48">
                            <div className="Left">
                                <div className="Image">
                                    <img alt="" src={not_image}/>
                                </div>
                            </div>
                        </th>
                        <th width="550">
                            <div className="Name">Имя пользователя</div>
                            <div className="Name">Текст сообщения Текст сообщения Текст сообщения Текст сообщения Текст сообщения Текст сообщения Текст сообщенияТекст сообщенияТекст сообщенияТекст сообщенияТекст сообщения</div>
                        </th>
                    </tr>
                </div>
            </table>
            <footer>
                <div className="Send">
                    <table>
                        <tr>
                            <th>
                                <textarea className="TextArea"></textarea>
                            </th>
                            <th>
                                <img alt="" src={send}/>
                            </th>
                        </tr>
                    </table>
                </div>
            </footer>
        </div>
    )
}

export default Chat