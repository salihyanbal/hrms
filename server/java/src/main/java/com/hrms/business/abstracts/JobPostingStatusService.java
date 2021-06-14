package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.JobPostingStatus;

import java.util.List;

public interface JobPostingStatusService {
    Result add(JobPostingStatus jobPostingStatus);
    DataResult<JobPostingStatus> getLastByJobPostingId(int jobPostingId);
    DataResult<List<JobPostingStatus>> getAllByJobPostingId(int jobPostingId);
    DataResult<List<JobPostingStatus>> getAll();
}
