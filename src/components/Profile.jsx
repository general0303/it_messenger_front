import not_image from '../images/not_image.png'
import '../styles/Profile.css'
import {useParams} from "react-router-dom";
import {getUser} from "../actions/user";
import {useState} from "react";
import Model from "./Model";
import UpdateUser from "./UpdateUser";

function Profile(){
    let user_id = useParams().user_id
    getUser(user_id)
    let user = JSON.parse(sessionStorage.getItem("user"))
    const [modelActive, setModelActive] = useState(false)
    return (
        <div className="Profile">
            <table>
                <tr>
                    <th>
                        {!user.avatar && <img alt="" src={not_image} width="256"/>}
                        {user.avatar && <img alt="" src={"https://it-messenger-back.herokuapp.com/"+user.avatar} width="256"/>}
                        <br></br>
                        {sessionStorage.getItem("id") === user_id && <button className="UpdateProfile" onClick={() => {setModelActive(true)}}>Редактировать</button>}
                    </th>
                    <th width="512">
                        <div className="Information">
                            <p>{user.username}</p>
                            <br></br>
                            {user.last_seen > 3 && <p>В последний раз онлайн {user.last_seen} минут назад</p>}
                            {user.last_seen <= 3 && <p>Онлайн</p>}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </div>
                    </th>
                </tr>
            </table>
            <Model active={modelActive} setActive={setModelActive}>
                <UpdateUser active={modelActive} setActive={setModelActive}/>
            </Model>
        </div>
    )
}

export default Profile