package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.EmployerStatus;
import com.hrms.entities.concretes.JobPostingStatus;

import java.util.List;

public interface EmployerStatusService {
    Result add(EmployerStatus employerStatus);
    DataResult<EmployerStatus> getLastByEmployerId(int employerId);
    DataResult<List<EmployerStatus>> getAllByEmployerId(int employerId);
    DataResult<List<EmployerStatus>> getAll();
}
