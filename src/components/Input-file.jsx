import '../styles/Input.css'
import {createChat} from "../actions/current_user";

function InputFile(props){
    return (
        <input onChange={(event) => createChat(props.name, event.target.files[0], props.navigate, props.active, props.setActive)}
               type={props.type}
               placeholder={props.placeholder}/>
    )
}

export default InputFile;