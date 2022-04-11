import {current_user} from "../actions/current_user";

function Main(){
    let data = current_user()
    return (
        <div>
            <p>Тест</p>
        </div>
    )
}

export default Main