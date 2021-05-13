import axios from "axios";

export default {
    saveTask: function (data) {
        console.log(data)
        return axios.post("http://localhost:4000/tasks", data)
    }
}