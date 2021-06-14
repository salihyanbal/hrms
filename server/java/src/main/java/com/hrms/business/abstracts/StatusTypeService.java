package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.StatusType;

import java.util.List;

public interface StatusTypeService {
    Result add(StatusType statusType);
    DataResult<List<StatusType>> getAll();
    DataResult<StatusType> getByName(String name);
}
