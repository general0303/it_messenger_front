import axios from "axios";
import {useNavigate} from "react-router-dom";

export const current_user = async () => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = await axios.get('http://localhost:5000/current_user', {headers: {Authorization: header}})
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const current_user_chats = () => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    let url = 'http://localhost:5000/users/'+sessionStorage.getItem('id')+'/chats'
    try {
        const response = axios.get(url, {headers: {Authorization: header}}).then((response) => {
            if (!sessionStorage.getItem("chats")){
                document.location.reload()
            }
            sessionStorage.setItem("chats", JSON.stringify(response.data))})
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const createChat = async (name, file, navigate, active, setActive) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    console.log(file)
    const formData = new FormData()
    formData.append("name", name)
    formData.append("file", file)
    try {
        const response = await axios.post('http://localhost:5000/chat',formData, {headers: {Authorization: header}})
        setActive(false)
        navigate("/chats/"+response.data.chat_id)
    } catch (e) {
        alert(e.response.data.message)
    }
}