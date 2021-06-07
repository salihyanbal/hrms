package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.JobPosition;

import java.util.List;

public interface JobPositionService {

    Result add(JobPosition jobPosition);
    DataResult<JobPosition> getByName(String name);
    DataResult<List<JobPosition>> getAll();

}
