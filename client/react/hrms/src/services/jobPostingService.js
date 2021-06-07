import axios from "axios"

export default class JobPostingService{

    getAll(){
        return axios.get("http://localhost:8080/api/jobpostings/getall")
    }

    getById(id){
        return axios.get("http://localhost:8080/api/jobpostings/getbyid?id=" + id)
    }
}