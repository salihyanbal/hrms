package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.EmploymentType;

import java.util.List;

public interface EmploymentTypeService {
    Result add(EmploymentType employmentType);
    DataResult<List<EmploymentType>> getAll();
}
