import axios from "axios";

export const chat_messages = (id) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    let url = 'https://it-messenger-back.herokuapp.com/chats/'+id+'/messages'
    try {
        const response = axios.get(url, {headers: {Authorization: header}}).then((response) => {
            if (!sessionStorage.getItem("messages")){
                document.location.reload()
            }
            sessionStorage.setItem("messages", JSON.stringify(response.data))})
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const write_message = (id, body) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    let url = 'https://it-messenger-back.herokuapp.com/chats/'+id+'/message'
    try {
        const response = axios.post(url, {body},{headers: {Authorization: header}}).then((response) => {
            document.location.reload()})
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const users = (id) => {
    try {
        const response = axios.get('https://it-messenger-back.herokuapp.com/chat_users/'+id).then((response) => {
            sessionStorage.setItem('users', JSON.stringify(response.data.users))
        })
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const admin = (id) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = axios.get('https://it-messenger-back.herokuapp.com/chats/'+id, {headers: {Authorization: header}}).then((response) => {
            sessionStorage.setItem('admin', JSON.stringify(response.data.admin))
        })
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const deleteChat = (id) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = axios.delete('https://it-messenger-back.herokuapp.com/chats/'+id, {headers: {Authorization: header}}).then((response) => {
            document.location.reload()
        })
    } catch (e) {
        alert(e.response.data.message)
    }
}


export const leftChat = (id) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = axios.delete('https://it-messenger-back.herokuapp.com/chats/'+id+'/left', {headers: {Authorization: header}}).then((response) => {
            document.location.reload()
        })
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const chat_users = (id) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = axios.get('https://it-messenger-back.herokuapp.com/chats/'+id+'/users', {headers: {Authorization: header}}).then((response) => {
            sessionStorage.setItem('chat_users', JSON.stringify(response.data))
        })
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const create_attachment = (id, files) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    let url = 'https://it-messenger-back.herokuapp.com/create_attachment'
    const formData = new FormData()
    //formData.append("file", file)
    for (let i=0; i<files.length; i++){
        formData.append("file", files[i])
    }
    formData.append("chat_id", id)
    try {
        const response = axios.post(url, formData,{headers: {Authorization: header}}).then((response) => {
            document.location.reload()})
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const create_invitation = (user_id, chat_id) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = axios.post('https://it-messenger-back.herokuapp.com/invitation', {user_id, chat_id},{headers: {Authorization: header}}).then((response) => {
            console.log(1)
            document.location.reload()})
    } catch (e) {
        alert(e.response.data.message)
    }
}