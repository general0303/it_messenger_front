import door from '../images/exit_white.png'
import plus from '../images/plus_icon.png'
import {logout} from "../actions/user";

function Header(){
    return (
        <div className="Header">
            <div className="Left-Part">
                {sessionStorage.getItem("token") && <div className="Element" onClick={() => logout()}>
                    <div className="Door">
                        <img alt="" src={door}/>
                    </div>
                </div>}
                <div className="Element">Название</div>
            </div>
            {sessionStorage.getItem("token") && <div className="Right-part">
                <div className="Element">
                    <div className="Avatar">
                        <img alt="" src={door}/>
                    </div>
                </div>
            </div>}
            {sessionStorage.getItem("token") && <div className="Right-part">
                <div className="Element">
                    <div className="Login">
                        Логин
                    </div>
                </div>
            </div>}
            {sessionStorage.getItem("token") && <div className="Right-part">
                <div className="Element">
                    <div className="Plus">
                        <img alt="" src={plus}/>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Header