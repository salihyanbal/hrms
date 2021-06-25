import axios from "axios";

export default class CandidateLanguageService {
  getAll() {
    return axios.get("http://localhost:8080/api/candidatelanguages/getall");
  }

  getAllByCandidateId(candidateId) {
    return axios.get(
      "http://localhost:8080/api/candidatelanguages/getallbycandidateid?candidateId=" +
        candidateId
    );
  }

  save(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidatelanguages/save",
      candidateLink
    );
  }

  delete(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidatelanguages/delete",
      candidateLink
    );
  }
}
