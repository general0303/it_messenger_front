import door from '../images/exit_white.png'
import plus from '../images/plus_icon.png'
import home from '../images/home.png'
import mail from '../images/mail.png'
import mail_mark from '../images/mail_mark.png'
import not_image from '../images/not_image.png'
import {logout} from "../actions/user";
import {NavLink} from "react-router-dom";
import Model from "./Model";
import {useState} from "react";
import CreateChat from "./CreateChat";
import Invitation from "./Invitation";

function Header(){
    const [modelActive, setModelActive] = useState(false)
    const [inviteActive, setInviteActive] = useState(false)
    let invites = JSON.parse(sessionStorage.getItem("invite"))
    if (!invites){
        invites = []
    }
    return (
        <div className="Header">
            <div className="Left-Part">
                {sessionStorage.getItem("token") && <div className="Element" onClick={() => logout()}>
                    <div className="Door">
                        <img alt="" src={door}/>
                    </div>
                </div>}
                {sessionStorage.getItem("token") && <div className="Element">
                    <div className="Home">
                        <NavLink to="/"><img alt="" src={home}/></NavLink>
                    </div>
                </div>}
                {sessionStorage.getItem("token") && invites.length === 0 && <div className="Element">
                    <div className="Home">
                        <NavLink to="/"><img alt="" src={mail}/></NavLink>
                    </div>
                </div>}
                {sessionStorage.getItem("token") && invites.length !== 0 && <div className="Element" onClick={() => {setInviteActive(true)}}>
                    <div className="Home">
                        <NavLink to="/"><img alt="" src={mail_mark}/></NavLink>
                    </div>
                </div>}
                <div className="Element">MWITT</div>
            </div>
            {sessionStorage.getItem("token") && <div className="Right-part">
                <div className="Element">
                    <div className="Avatar">
                        <NavLink to={'/users/'+sessionStorage.getItem("id")}>
                            {!sessionStorage.getItem("avatar") && <img alt="" src={not_image}/>}
                            {sessionStorage.getItem("avatar") && <img alt="" src={"http://localhost:5000/"+sessionStorage.getItem("avatar")}/>}
                        </NavLink>
                    </div>
                </div>
            </div>}
            {sessionStorage.getItem("token") && <div className="Right-part">
                <div className="Element">
                    <div className="Login">
                        {sessionStorage.getItem("username")}
                    </div>
                </div>
            </div>}
            {sessionStorage.getItem("token") && <div className="Right-part">
                <div className="Element" onClick={() => {setModelActive(true)}}>
                    <div className="Plus">
                        <img alt="" src={plus}/>
                    </div>
                </div>
            </div>}
            <Model active={modelActive} setActive={setModelActive}>
                <CreateChat active={modelActive} setActive={setModelActive}/>
            </Model>
            <Model active={inviteActive} setActive={setInviteActive}>
                <Invitation active={inviteActive} setActive={setInviteActive}/>
            </Model>
        </div>
    )
}

export default Header