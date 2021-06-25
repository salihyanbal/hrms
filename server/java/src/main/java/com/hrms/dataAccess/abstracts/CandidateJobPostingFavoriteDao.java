package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.CandidateJobPostingFavorite;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CandidateJobPostingFavoriteDao extends JpaRepository<CandidateJobPostingFavorite,Integer> {
    List<CandidateJobPostingFavorite> getAllByCandidate_Id(int candidateId);
    CandidateJobPostingFavorite getByCandidate_IdAndJobPosting_Id(int candidateId,int jobPostingId);
}
