import {current_user} from "../actions/current_user";
import {useState} from "react";
import Input from "./Input";
import search from "../images/search.png";
import {NavLink, useParams} from "react-router-dom";
import not_image from "../images/not_image.png";
import send from "../images/send.png"
import {chat_messages, write_message} from "../actions/chat";

function Chat(){
    const [value, setValue] = useState("")
    let chat_id = useParams().chat_id
    chat_messages(chat_id)
    let messages = JSON.parse(sessionStorage.getItem("messages"))
    console.log(messages)
    return (
        <div>
            <br></br>
            <table>
                {messages.map(message =>
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
                            <div className="Name">{message.author.username}</div>
                            <div className="Name"> {message.body}</div>
                        </th>
                    </tr>
                </div>
                )}
            </table>
            <footer>
                <div className="Send">
                    <table>
                        <tr>
                            <th>
                                <textarea className="TextArea" onChange={(event) => setValue(event.target.value)}
               value={value}></textarea>
                            </th>
                            <th>
                                <img alt="" src={send} onClick={() => write_message(chat_id, value)}/>
                            </th>
                        </tr>
                    </table>
                </div>
            </footer>
        </div>
    )
}

export default Chat