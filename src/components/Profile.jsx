import not_image from '../images/not_image.png'
import '../styles/Profile.css'
import {NavLink, useParams} from "react-router-dom";
import {getUser} from "../actions/user";

function Profile(){
    let user_id = useParams().user_id
    getUser(user_id)
    let user = JSON.parse(sessionStorage.getItem("user"))
    return (
        <div className="Profile">
            <table>
                <tr>
                    <th>
                        <img alt="" src={not_image} width="256"/>
                        <br></br>
                        {sessionStorage.getItem("id") === user_id && <button className="UpdateProfile"><NavLink to={"/users/"+user_id+"/update"}>Редактировать</NavLink></button>}
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
        </div>
    )
}

export default Profile