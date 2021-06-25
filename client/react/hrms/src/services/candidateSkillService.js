import axios from "axios";

export default class CandidateSkillService {
  getAll() {
    return axios.get("http://localhost:8080/api/candidateskills/getall");
  }

  getAllByCandidateId(candidateId) {
    return axios.get(
      "http://localhost:8080/api/candidateskills/getallbycandidateid?candidateId=" +
        candidateId
    );
  }

  save(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidateskills/save",
      candidateLink
    );
  }

  delete(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidateskills/delete",
      candidateLink
    );
  }
}
