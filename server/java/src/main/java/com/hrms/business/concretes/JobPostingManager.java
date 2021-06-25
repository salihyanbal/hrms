package com.hrms.business.concretes;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hrms.business.abstracts.JobPostingService;
import com.hrms.business.abstracts.JobPostingStatusService;
import com.hrms.core.utilities.results.*;
import com.hrms.dataAccess.abstracts.JobPostingDao;
import com.hrms.entities.concretes.JobPosting;
import com.hrms.entities.concretes.JobPostingStatus;
import com.hrms.entities.concretes.StatusType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
public class JobPostingManager implements JobPostingService {

    private JobPostingDao jobPostingDao;
    private JobPostingStatusService jobPostingStatusService;
    private ObjectMapper objectMapper;

    @Autowired
    public JobPostingManager(JobPostingDao jobPostingDao, @Lazy JobPostingStatusService jobPostingStatusService, ObjectMapper objectMapper) {
        this.jobPostingDao = jobPostingDao;
        this.jobPostingStatusService = jobPostingStatusService;
        this.objectMapper = objectMapper;
    }

    //TODO: Refactor FOR STATUS
    @Override
    public Result add(JobPosting jobPosting) {
        jobPosting.setPublishedAt(LocalDate.now());
        this.jobPostingDao.save(jobPosting);
        JobPostingStatus jobPostingStatusWaiting = new JobPostingStatus(0,LocalDate.now(),jobPosting,null,new StatusType(1,null,null));
        this.jobPostingStatusService.add(jobPostingStatusWaiting);
        return new SuccessResult("İş ilanı eklendi");
    }

    @Override
    public Result delete(int id) {
        JobPosting jobPostingToChange = this.jobPostingDao.findById(id).get();
        jobPostingToChange.setDeleted(true);
        this.jobPostingDao.save(jobPostingToChange);
        return new SuccessResult("İş ilanı silindi!");
    }

    @Override
    public DataResult<JobPosting> getById(int id) {
        return new SuccessDataResult<>(this.jobPostingDao.findById(id).orElse(null));
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
        return new SuccessDataResult<>(this.jobPostingDao.getAllByStatusId(statusId));
    }

    @Override
    public DataResult<List<JobPosting>> getAllByStatusIdAndPageNumber(int statusId, int pageNumber) {
        Pageable page = PageRequest.of(pageNumber-1,10);
        return new SuccessDataResult<>(this.jobPostingDao.getAllByStatusId(statusId,page));
    }

    @Override
    public DataResult<List<JobPosting>> getAllByEmployerIdAndIsDeletedFalse(int employerId) {
        return new SuccessDataResult<>(this.jobPostingDao.getAllByEmployerIdAndIsDeletedFalse(employerId));
    }

}