import door from '../images/exit_white.png'
import plus from '../images/plus_icon.png'
import {logout} from "../actions/user";

function Header(){
    return (
        <div className="Header">
            <div className="Left-Part">
                <div className="Element" onClick={() => logout()}>
                    <div className="Door">
                        <img src={door}></img>
                    </div>
                </div>
                <div className="Element">Название</div>
            </div>
            <div className="Right-part">
                <div className="Element">
                    <div className="Avatar">
                        <img src={door}></img>
                    </div>
                </div>
            </div>
            <div className="Right-part">
                <div className="Element">
                    <div className="Login">
                        Логин
                    </div>
                </div>
            </div>
            <div className="Right-part">
                <div className="Element">
                    <div className="Plus">
                        <img src={plus}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header