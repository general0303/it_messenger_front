import {useState} from "react";
import Input from "./Input";
import {acceptTheInvite, createChat, declineTheInvite} from "../actions/current_user";
import {NavLink, useNavigate} from "react-router-dom";
import '../styles/Main.css'
import not_image from '../images/not_image.png'
import InputFile from "./Input-file";

function Invitation({active, setActive}) {
    const [name, setName] = useState("")
    const navigate = useNavigate()
    let invites = JSON.parse(sessionStorage.getItem("invite"))
    if (!invites){
        invites = []
    }
    return (
        <div className="Invitation">
            <div className="Invitation-Header">Приглашения</div>
            <table>
                {invites.map(invite =>
                <tr>
                    <div className="Invite">
                    <th width="48">
                        <div className="Image">
                            <div className="Image">
                                {!invite.chat_image && <img alt="" src={not_image}/>}
                                {invite.chat_image && <img alt="" src={"https://it-messenger-back.herokuapp.com/"+invite.chat_image}/>}
                            </div>
                        </div>
                    </th>
                    <th width="140">
                        <div className="Name">{invite.chat_name}</div>
                    </th>
                    <th>
                        <button className="Accept" onClick={() => {acceptTheInvite(invite, navigate, active, setActive)}}><NavLink to="/">Принять</NavLink></button>
                    </th>
                    <th>
                        <button className="Decline" onClick={() => {declineTheInvite(invite, navigate, active, setActive)}}><NavLink to="/">Отказаться</NavLink></button>
                    </th>
                        </div>
                </tr>
                )}
            </table>
        </div>
    )
}

export default Invitation;