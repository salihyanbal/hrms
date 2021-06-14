package com.hrms.business.concretes;

import com.hrms.business.abstracts.JobPostingService;
import com.hrms.business.abstracts.JobPostingStatusService;
import com.hrms.core.utilities.results.*;
import com.hrms.dataAccess.abstracts.JobPostingDao;
import com.hrms.entities.concretes.Employee;
import com.hrms.entities.concretes.JobPosting;
import com.hrms.entities.concretes.JobPostingStatus;
import com.hrms.entities.concretes.StatusType;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class JobPostingManager implements JobPostingService {

    private JobPostingDao jobPostingDao;
    private JobPostingStatusService jobPostingStatusService;

    @Autowired
    public JobPostingManager(JobPostingDao jobPostingDao, JobPostingStatusService jobPostingStatusService) {
        this.jobPostingDao = jobPostingDao;
        this.jobPostingStatusService = jobPostingStatusService;
    }

    @Override
    public Result add(JobPosting jobPosting) {
        jobPosting.setPublishedAt(LocalDate.now());
        this.jobPostingDao.save(jobPosting);
        JobPostingStatus jobPostingStatusWaiting = new JobPostingStatus(0,LocalDate.now(),jobPosting,null,new StatusType(1,null,null));
        this.jobPostingStatusService.add(jobPostingStatusWaiting);
        return new SuccessResult("İş ilanı eklendi");
    }

    @Override
    public Result toggleActiveStatus(int id) {
        JobPosting jobPostingToChange = this.jobPostingDao.findById(id).get();
        jobPostingToChange.setDeleted(!jobPostingToChange.isDeleted());
        this.jobPostingDao.save(jobPostingToChange);
        return new SuccessResult("Başarılı!");
    }

    @Override
    public DataResult<JobPosting> getById(int id) {
        return new SuccessDataResult<>(this.jobPostingDao.findById(id).get());
    }

    @Override
    public DataResult<List<JobPosting>> getAll() {
        return new SuccessDataResult<>(this.jobPostingDao.findAll());
    }

    @Override
    public DataResult<List<JobPosting>> getAllByApplicationDeadline(LocalDate date) {
        return new SuccessDataResult<>(this.jobPostingDao.getAllByApplicationDeadlineLessThanEqual(date));
    }

    @Override
    public DataResult<List<JobPosting>> getAllByEmployerId(int employerId) {
        return new SuccessDataResult<>(this.jobPostingDao.getAllByEmployerId(employerId));
    }

    @Override
    public DataResult<List<JobPosting>> getAllByStatusId(int statusId) {
        return new SuccessDataResult<>(this.jobPostingDao.getAllByStatusName(statusId));
    }


}
