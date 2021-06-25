package com.hrms.business.concretes;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hrms.business.abstracts.EmployerService;
import com.hrms.business.abstracts.EmployerStatusService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.EmployerDao;
import com.hrms.entities.concretes.Employer;
import com.hrms.entities.concretes.EmployerStatus;
import com.hrms.entities.concretes.JobPosting;
import com.hrms.entities.concretes.StatusType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
public class EmployerManager implements EmployerService {

    private EmployerDao employerDao;
    private EmployerStatusService employerStatusService;
    private ObjectMapper objectMapper;

    @Autowired
    public EmployerManager(EmployerDao employerDao, @Lazy EmployerStatusService employerStatusService, ObjectMapper objectMapper){
        this.employerDao = employerDao;
        this.employerStatusService = employerStatusService;
        this.objectMapper = objectMapper;
    }

    @Override
    public Result add(Employer employer) {
        this.employerDao.save(employer);
        return new SuccessResult("İş veren eklendi.");
    }

    //TODO :REFACTOR FOR STATUS
    @Override
    public Result update(Employer employer) {
        Employer employerToUpdate = getById(employer.getId()).getData();
        Map<String,Object> update = this.objectMapper.convertValue(employer,Map.class);
        employerToUpdate.setUpdate(update);
        this.employerDao.save(employerToUpdate);
        EmployerStatus employerStatusWaiting = new EmployerStatus(0,LocalDate.now(),employer,null,new StatusType(4,null,null));
        this.employerStatusService.add(employerStatusWaiting);
        return new SuccessResult("İş ilanı güncellendi");
    }


    @Override
    public DataResult<List<Employer>> getAll() {
        return new SuccessDataResult<>(this.employerDao.findAll(),"İş verenler listelendi.");
    }

    @Override
    public DataResult<Employer> getById(int id) {
        return new SuccessDataResult<>(this.employerDao.findById(id).get());
    }

    @Override
    public Result approveUpdate(int id) {
        Employer oldEmployer = getById(id).getData();
        Employer jobPostingToUpdate = objectMapper.convertValue(oldEmployer.getUpdate(),Employer.class);
        employerDao.save(jobPostingToUpdate);
        return new SuccessResult("Güncelleme onaylandı");
    }

}
