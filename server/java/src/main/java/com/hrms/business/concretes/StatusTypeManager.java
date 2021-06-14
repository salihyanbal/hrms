package com.hrms.business.concretes;

import com.hrms.business.abstracts.StatusTypeService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.StatusTypeDao;
import com.hrms.entities.concretes.StatusType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusTypeManager implements StatusTypeService {

    private StatusTypeDao statusTypeDao;

    @Autowired
    public StatusTypeManager(StatusTypeDao statusTypeDao) {
        this.statusTypeDao = statusTypeDao;
    }


    @Override
    public Result add(StatusType statusType) {
        this.statusTypeDao.save(statusType);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<StatusType>> getAll() {
        return new SuccessDataResult<>(this.statusTypeDao.findAll());
    }

    @Override
    public DataResult<StatusType> getByName(String name) {
        return new SuccessDataResult<>(this.statusTypeDao.getByName(name));
    }
}
