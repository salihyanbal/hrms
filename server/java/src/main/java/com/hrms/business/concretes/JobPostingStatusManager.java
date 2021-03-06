package com.hrms.business.concretes;

import com.hrms.business.abstracts.JobPostingService;
import com.hrms.business.abstracts.JobPostingStatusService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.JobPostingStatusDao;
import com.hrms.entities.concretes.JobPostingStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class JobPostingStatusManager implements JobPostingStatusService {

    private JobPostingStatusDao jobPostingStatusDao;
    private JobPostingService jobPostingService;

    @Autowired
    public JobPostingStatusManager(JobPostingStatusDao jobPostingStatusDao, @Lazy JobPostingService jobPostingService) {
        this.jobPostingStatusDao = jobPostingStatusDao;
        this.jobPostingService = jobPostingService;
    }

    @Override
    public Result add(JobPostingStatus jobPostingStatus) {
        this.jobPostingStatusDao.save(jobPostingStatus);
        return new SuccessResult();
    }

    @Override
    public DataResult<JobPostingStatus> getLastByJobPostingId(int jobPostingId) {
        return new SuccessDataResult<>(this.jobPostingStatusDao.getTopByJobPostingIdOrderByIdDesc(jobPostingId));
    }

    @Override
    public DataResult<List<JobPostingStatus>> getAllByJobPostingId(int jobPostingId) {
        return new SuccessDataResult<>(this.jobPostingStatusDao.getAllByJobPostingId(jobPostingId));
    }

    @Override
    public DataResult<List<JobPostingStatus>> getAll() {
        return new SuccessDataResult<>(this.jobPostingStatusDao.findAll());
    }

}
