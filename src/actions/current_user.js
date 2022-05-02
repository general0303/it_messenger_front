import axios from "axios";
import {useNavigate} from "react-router-dom";

export const current_user = async () => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = await axios.get('https://it-messenger-back.herokuapp.com/current_user', {headers: {Authorization: header}})
        sessionStorage.setItem("invite", JSON.stringify(response.data.invites))
        sessionStorage.setItem("username", response.data.username)
        sessionStorage.setItem("avatar", response.data.avatar)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const current_user_chats = () => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    let url = 'https://it-messenger-back.herokuapp.com/users/'+sessionStorage.getItem('id')+'/chats'
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

export const updateCurrentUser = async (name, file, active, setActive) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    console.log(file)
    const formData = new FormData()
    formData.append("username", name)
    formData.append("file", file)
    try {
        const response = await axios.put('https://it-messenger-back.herokuapp.com/current_user',formData, {headers: {Authorization: header}})
        setActive(false)
        sessionStorage.setItem("username", name)
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
        const response = await axios.post('https://it-messenger-back.herokuapp.com/chat',formData, {headers: {Authorization: header}})
        setActive(false)
        navigate("/chats/"+response.data.chat_id)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const updateChat = async (name, id, navigate, active, setActive) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    const formData = new FormData()
    formData.append("name", name)
    try {
        const response = await axios.put('https://it-messenger-back.herokuapp.com/chats/'+id,formData, {headers: {Authorization: header}})
        setActive(false)
        navigate("/chats/"+response.data.chat_id)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const acceptTheInvite = async (invite, navigate, active, setActive) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = await axios.get('https://it-messenger-back.herokuapp.com/accept_the_invitation/'+invite.invite_id, {headers: {Authorization: header}})
        setActive(false)
        navigate("/chats/"+invite.chat_id)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const declineTheInvite = async (invite, navigate, active, setActive) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = await axios.get('https://it-messenger-back.herokuapp.com/decline_the_invitation/'+invite.invite_id, {headers: {Authorization: header}})
        setActive(false)
        navigate("/")
    } catch (e) {
        alert(e.response.data.message)
    }
}