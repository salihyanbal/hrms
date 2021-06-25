import axios from "axios";

export default class CandidateExperienceService {
  getAll() {
    return axios.get("http://localhost:8080/api/candidateexperiences/getall");
  }

  getAllByCandidateIdAndOrderByDate(candidateId) {
    return axios.get(
      "http://localhost:8080/api/candidateexperiences/getallbycandidateidorderbyleavedate?candidateId=" +
        candidateId
    );
  }

  save(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidateexperiences/save",
      candidateLink
    );
  }

  delete(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidateexperiences/delete",
      candidateLink
    );
  }
}
