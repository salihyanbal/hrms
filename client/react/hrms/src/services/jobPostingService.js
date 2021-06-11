import axios from "axios";

export default class JobPostingService {
  getAll() {
    return axios.get("http://localhost:8080/api/jobpostings/getall");
  }

  getAllByIsConfirmed(isConfirmed) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getallbyisconfirmed?isConfirmed=" +
        isConfirmed
    );
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/jobpostings/getbyid?id=" + id);
  }

  getAllByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/api/jobpostings/getallbyemployerid?employerId=" +
        employerId
    );
  }

  add(jobPosting) {
    jobPosting.employer = {};
    jobPosting.employer.id = Number(jobPosting.employerId);
    jobPosting.city = {};
    jobPosting.city.id = Number(jobPosting.cityId);
    jobPosting.employmentType = {};
    jobPosting.employmentType.id = Number(jobPosting.employmentTypeId);
    jobPosting.jobPosition = {};
    jobPosting.jobPosition.id = Number(jobPosting.jobPositionId);

    return axios.post("http://localhost:8080/api/jobpostings/add", jobPosting);
  }
}
