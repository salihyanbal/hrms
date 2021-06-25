package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.CandidateJobPostingFavorite;

import java.util.List;

public interface CandidateJobPostingFavoriteService {
    Result save(CandidateJobPostingFavorite candidateJobPostingFavorite);
    Result delete(CandidateJobPostingFavorite candidateJobPostingFavorite);
    DataResult<List<CandidateJobPostingFavorite>> getAll();
    DataResult<List<CandidateJobPostingFavorite>> getAllByCandidateId(int candidateId);
    DataResult<CandidateJobPostingFavorite> getByCandidateIdAndJobPostingId(int candidateId,int jobPostingId);
}
