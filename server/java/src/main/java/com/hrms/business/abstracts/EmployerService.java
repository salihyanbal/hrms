package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.Candidate;
import com.hrms.entities.concretes.Employer;

import javax.xml.crypto.Data;
import java.util.List;

public interface EmployerService {

    Result add(Employer employer);
    Result update(Employer employer);
    DataResult<List<Employer>> getAll();
    DataResult<Employer> getById(int id);
    Result approveUpdate(int id);
}
