import {useState} from "react";
import Input from "./Input";
import search from "../images/search.png";
import {useParams} from "react-router-dom";
import not_image from "../images/not_image.png";
import send from "../images/send.png"
import {
    admin,
    chat_messages,
    chat_users,
    create_attachment,
    create_invitation,
    users,
    write_message
} from "../actions/chat";
import file_icon from "../images/file.png"
// import InputFile from "./Input-file";
import "../styles/Chat.css"

function Chat(){
    const [value, setValue] = useState("")
    const [searchUser, setSearchUsers] = useState("")
    const [dragEnter, setDragEnter] = useState(false)
    let chat_id = useParams().chat_id
    users(chat_id)
    chat_users(chat_id)
    admin(chat_id)

    function onDragEnterHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(true)
    }

    function onDragLeaveHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
    }

    /**function onDragOverHandler(event) {
    event.preventDefault()
    event.stopPropagation()
    setDragEnter(false)
    }
     **/

    function dropHandler(event){
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        create_attachment(chat_id, files)
        setDragEnter(false)
    }
    chat_messages(chat_id)
    let messages = JSON.parse(sessionStorage.getItem("messages"))
    let all_users = JSON.parse(sessionStorage.getItem("users"))
    // let users_in_chat = JSON.parse(sessionStorage.getItem("chat_users"))
    const filteredUsers = all_users.filter(user => {
        return user.username.toLowerCase().includes(searchUser.toLowerCase())
    })
    let chat_admin = JSON.parse(sessionStorage.getItem("admin"))
    return (!dragEnter ?
        <div onDragEnter={onDragEnterHandler} onDrop={dropHandler} onDragLeave={onDragLeaveHandler} onDragOver={onDragEnterHandler}>
            <br></br>
            {chat_admin.admin_id == sessionStorage.getItem("id") && <form className="Search-form">
                <table>
                    <tr>
                        <th>
                            <Input value={searchUser} setValue={setSearchUsers} type="text"
                                   placeholder="Пригласить"/>
                            <select onChange={(event) => create_invitation(event.target.value, chat_id)}>
                                <option value={''}></option>
                                {filteredUsers.map(info => (
                                    <option value={info.user_id}>{info.username}</option>
                                ))}
                            </select>
                        </th>
                        <th>
                            <img alt="" src={search}/>
                        </th>
                    </tr>
                </table>
            </form>
            }
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
                            <tr>
                                <th>
                                <div className="Name">{message.author.username}</div>
                                    </th>
                                <th>
                                <div className="Name"> {message.body}</div>
                                    </th>
                            </tr>
                            <tr>
                                <th width="100px"></th>
                                {message.attachments.map(file =>
                                    <th><a href={"https://it-messenger-back.herokuapp.com/"+file.link}><img alt="" src={file_icon} /></a></th>
                                )}
                            </tr>
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
            :
            <div className="Drag" onDrop={dropHandler} onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} onDragOver={onDragEnterHandler}>Перетащите файлы сюда</div>
    )
}

export default Chat