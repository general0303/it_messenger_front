import axios from "axios";

export const current_user = async () => {
    let header = 'Bearer ' + sessionStorage.getItem("token")
    try {
        const response = await axios.get('http://localhost:5000/current_user', {headers: {Authorization: header}})
        console.log(response.data)
        return response.data
    } catch (e) {
        alert(e.response.data.message)
    }
}