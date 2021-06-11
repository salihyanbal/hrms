package com.hrms.business.concretes;

import com.hrms.business.abstracts.EmploymentTypeService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.EmploymentTypeDao;
import com.hrms.entities.concretes.EmploymentType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmploymentTypeManager implements EmploymentTypeService {

    private EmploymentTypeDao employmentTypeDao;

    @Autowired
    public EmploymentTypeManager(EmploymentTypeDao employmentTypeDao) {
        this.employmentTypeDao = employmentTypeDao;
    }


    @Override
    public Result add(EmploymentType employmentType) {
        this.employmentTypeDao.save(employmentType);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<EmploymentType>> getAll() {
        return new SuccessDataResult<>(this.employmentTypeDao.findAll());
    }
}
