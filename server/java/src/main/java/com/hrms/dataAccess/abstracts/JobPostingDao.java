package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.JobPosting;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

public interface JobPostingDao extends JpaRepository<JobPosting,Integer> {
    List<JobPosting> getAllByApplicationDeadlineLessThanEqual(LocalDate date);
    List<JobPosting> getAllByEmployer(int employerId);
}
