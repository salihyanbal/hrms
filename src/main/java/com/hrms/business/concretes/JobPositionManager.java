package com.hrms.business.concretes;

import com.hrms.business.abstracts.JobPositionService;
import com.hrms.core.utilities.results.*;
import com.hrms.dataAccess.abstracts.JobPositionDao;
import com.hrms.entities.concretes.JobPosition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobPositionManager implements JobPositionService {

    private JobPositionDao jobPositionDao;

    @Autowired
    public JobPositionManager(JobPositionDao jobPositionDao) {
        this.jobPositionDao = jobPositionDao;
    }

    @Override
    public Result add(JobPosition jobPosition) {
        if(getByName(jobPosition.getName()).getData() != null){
            return new ErrorResult("Aynı pozisyon zaten var.");
        }
        this.jobPositionDao.save(jobPosition);
        return new SuccessResult("Pozisyon eklendi");
    }

    @Override
    public DataResult<JobPosition> getByName(String name) {
        return new SuccessDataResult<>(this.jobPositionDao.getByName(name));
    }

    @Override
    public DataResult<List<JobPosition>> getAll() {
        return new SuccessDataResult<>(this.jobPositionDao.findAll());
    }

}
