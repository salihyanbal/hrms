import axios from "axios";

export default class CandidateLinkService {
  getAll() {
    return axios.get("http://localhost:8080/api/candidatelinks/getall");
  }

  getAllByCandidateId(candidateId) {
    return axios.get(
      "http://localhost:8080/api/candidatelinks/getallbycandidateid?candidateId=" +
        candidateId
    );
  }

  save(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidatelinks/save",
      candidateLink
    );
  }

  delete(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidatelinks/delete",
      candidateLink
    );
  }
}
