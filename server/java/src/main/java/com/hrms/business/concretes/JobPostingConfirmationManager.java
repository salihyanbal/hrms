package com.hrms.business.concretes;

import com.hrms.business.abstracts.JobPostingConfirmationService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.JobPostingConfirmationDao;
import com.hrms.entities.concretes.JobPostingConfirmation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobPostingConfirmationManager implements JobPostingConfirmationService {

    private JobPostingConfirmationDao jobPostingConfirmationDao;

    @Autowired
    public JobPostingConfirmationManager(JobPostingConfirmationDao jobPostingConfirmationDao) {
        this.jobPostingConfirmationDao = jobPostingConfirmationDao;
    }

    @Override
    public Result add(JobPostingConfirmation jobPostingConfirmation) {
        this.jobPostingConfirmationDao.save(jobPostingConfirmation);
        return new SuccessResult();
    }

    @Override
    public DataResult<JobPostingConfirmation> getByJobPostingId(int jobPostingId) {
        return new SuccessDataResult<>(this.jobPostingConfirmationDao.getByJobPostingId(jobPostingId));
    }

    @Override
    public DataResult<List<JobPostingConfirmation>> getAll() {
        return new SuccessDataResult<>(this.jobPostingConfirmationDao.findAll());
    }
}
