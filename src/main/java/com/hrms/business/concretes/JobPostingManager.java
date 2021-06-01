package com.hrms.business.concretes;

import com.hrms.business.abstracts.JobPostingService;
import com.hrms.core.utilities.results.*;
import com.hrms.dataAccess.abstracts.JobPostingDao;
import com.hrms.entities.concretes.JobPosting;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
public class JobPostingManager implements JobPostingService {

    private JobPostingDao jobPostingDao;

    @Autowired
    public JobPostingManager(JobPostingDao jobPostingDao) {
        this.jobPostingDao = jobPostingDao;
    }


    @Override
    public Result add(JobPosting jobPosting) {
        jobPosting.setPublishedAt(LocalDate.now());
        this.jobPostingDao.save(jobPosting);
        return new SuccessResult("İş ilanı eklendi");
    }

    @Override
    public Result toggleActiveStatus(int id) {
        JobPosting jobPostingToChange = this.jobPostingDao.findById(id).get();
        jobPostingToChange.setActive(!jobPostingToChange.isActive());
        this.jobPostingDao.save(jobPostingToChange);
        return new SuccessResult("Başarılı!");
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
    public DataResult<List<JobPosting>> getAllByEmployer(int employerId) {
        return new SuccessDataResult<>(this.jobPostingDao.getAllByEmployer(employerId));
    }
}
