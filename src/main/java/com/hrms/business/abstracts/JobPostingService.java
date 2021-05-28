package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.JobPosting;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface JobPostingService {

    Result add(JobPosting jobPosting);
    Result toggleActiveStatus(int id);
    DataResult<List<JobPosting>> getAll();
    DataResult<List<JobPosting>> getAllByApplicationDeadline(LocalDate date);
    DataResult<List<JobPosting>> getAllByEmployer(int employerId);
}
