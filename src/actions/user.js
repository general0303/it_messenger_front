import axios from "axios";

export const registration = async (username, email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/registration', {username, email, password})
        //sessionStorage.setItem("token", response.data.token)
        document.location.reload()
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const authorization = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:5000/login', {username, password})
        sessionStorage.setItem("token", response.data.token)
        sessionStorage.setItem("id", response.data.id)
        sessionStorage.setItem("username", username)
        document.location.reload()
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const getUser = async (id) => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = await axios.get('http://localhost:5000/users/'+id, {headers: {Authorization: header}})
        if (!sessionStorage.getItem("user")){
                document.location.reload()
            }
        sessionStorage.setItem("user", JSON.stringify(response.data))
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const logout = () => {
    if (sessionStorage.getItem("token")) {
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("id")
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("chats")
        sessionStorage.removeItem("invite")
    }
    document.location.reload()
}