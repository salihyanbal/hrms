package com.hrms.business.concretes;

import com.hrms.business.abstracts.CandidateJobPostingFavoriteService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateJobPostingFavoriteDao;
import com.hrms.entities.concretes.CandidateJobPostingFavorite;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateJobPostingFavoriteManager implements CandidateJobPostingFavoriteService {

    private CandidateJobPostingFavoriteDao candidateJobPostingFavoriteDao;

    @Autowired
    public CandidateJobPostingFavoriteManager(CandidateJobPostingFavoriteDao candidateJobPostingFavoriteDao) {
        this.candidateJobPostingFavoriteDao = candidateJobPostingFavoriteDao;
    }


    @Override
    public Result save(CandidateJobPostingFavorite candidateJobPostingFavorite) {
        this.candidateJobPostingFavoriteDao.save(candidateJobPostingFavorite);
        return new SuccessResult();
    }

    @Override
    public Result delete(CandidateJobPostingFavorite candidateJobPostingFavorite) {
        this.candidateJobPostingFavoriteDao.delete(candidateJobPostingFavorite);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<CandidateJobPostingFavorite>> getAll() {
        return new SuccessDataResult<>(this.candidateJobPostingFavoriteDao.findAll());
    }

    @Override
    public DataResult<List<CandidateJobPostingFavorite>> getAllByCandidateId(int candidateId) {
        return new SuccessDataResult<>(this.candidateJobPostingFavoriteDao.getAllByCandidate_Id(candidateId));
    }

    @Override
    public DataResult<CandidateJobPostingFavorite> getByCandidateIdAndJobPostingId(int candidateId, int jobPostingId) {
        return new SuccessDataResult<>(this.candidateJobPostingFavoriteDao.getByCandidate_IdAndJobPosting_Id(candidateId,jobPostingId));
    }
}
