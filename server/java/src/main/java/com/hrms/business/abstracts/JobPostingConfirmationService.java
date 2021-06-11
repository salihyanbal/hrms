package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.JobPosition;
import com.hrms.entities.concretes.JobPostingConfirmation;

import java.util.List;

public interface JobPostingConfirmationService {
    Result add(JobPostingConfirmation jobPostingConfirmation);
    DataResult<JobPostingConfirmation> getByJobPostingId(int jobPostingId);
    DataResult<List<JobPostingConfirmation>> getAll();
}
