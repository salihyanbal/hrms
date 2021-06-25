import axios from "axios";

export default class CandidateJobPostingFavoriteService {
  getAll() {
    return axios.get(
      "http://localhost:8080/api/candidatejobpostingfavorites/getall"
    );
  }

  getAllByCandidateId(candidateId) {
    return axios.get(
      "http://localhost:8080/api/candidatejobpostingfavorites/getallbycandidateid?candidateId=" +
        candidateId
    );
  }

  getByCandidateIdAndJobPostingId(candidateId, jobPostingId) {
    return axios.get(
      "http://localhost:8080/api/candidatejobpostingfavorites/getbycandidateidandjobpostingid?candidateId=" +
        candidateId +
        "&jobPostingId=" +
        jobPostingId
    );
  }

  save(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidatejobpostingfavorites/save",
      candidateLink
    );
  }

  delete(candidateLink) {
    return axios.post(
      "http://localhost:8080/api/candidatejobpostingfavorites/delete",
      candidateLink
    );
  }
}
