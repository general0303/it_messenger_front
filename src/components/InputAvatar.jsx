import {updateCurrentUser} from "../actions/current_user";

function InputAvatar(props){
    return (
        <input onChange={(event) => updateCurrentUser(props.name, event.target.files[0], props.active, props.setActive)}
               type={props.type}
               placeholder={props.placeholder}/>
    )
}

export default InputAvatar;