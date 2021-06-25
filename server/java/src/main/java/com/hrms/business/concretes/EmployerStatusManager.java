package com.hrms.business.concretes;

import com.hrms.business.abstracts.EmployerService;
import com.hrms.business.abstracts.EmployerStatusService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.EmployerStatusDao;
import com.hrms.entities.concretes.EmployerStatus;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class EmployerStatusManager implements EmployerStatusService {

    private EmployerStatusDao employerStatusDao;
    private EmployerService employerService;

    public EmployerStatusManager(@Lazy EmployerStatusDao employerStatusDao, EmployerService employerService) {
        this.employerStatusDao = employerStatusDao;
        this.employerService = employerService;
    }

    @Override
    public Result add(EmployerStatus employerStatus) {
        employerStatus.setCreatedAt(LocalDate.now());
        handleUpdate(employerStatus);
        this.employerStatusDao.save(employerStatus);
        return new SuccessResult();
    }

    @Override
    public DataResult<EmployerStatus> getLastByEmployerId(int employerId) {
        return new SuccessDataResult<>(this.employerStatusDao.getTopByEmployerIdOrderByIdDesc(employerId));
    }

    @Override
    public DataResult<List<EmployerStatus>> getAllByEmployerId(int employerId) {
        return new SuccessDataResult<>(this.employerStatusDao.getAllByEmployerId(employerId));
    }

    @Override
    public DataResult<List<EmployerStatus>> getAll() {
        return new SuccessDataResult<>(this.employerStatusDao.findAll());
    }

    // TODO: REFACTOR
    public void handleUpdate(EmployerStatus employerStatus){
        EmployerStatus lastStatus = getLastByEmployerId(employerStatus.getEmployer().getId()).getData();
        if(lastStatus.getStatusType().getId() != 4){
            return;
        }
        if(employerStatus.getStatusType().getId() != 2){
            return;
        }
        this.employerService.approveUpdate(employerStatus.getEmployer().getId());
    }
}
