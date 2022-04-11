import '../styles/Menu.css'
import {NavLink} from "react-router-dom";

function Menu(){
    return (
        <div className="Menu">
            <div className="Menu-Content">
                <ul>
                    <li><a href="/">Все</a></li>
                    <li><a href="/">Первая группа</a></li>
                    <li><a href="/">вторая группа</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;