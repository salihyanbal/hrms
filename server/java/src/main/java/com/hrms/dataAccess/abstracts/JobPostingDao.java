package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.JobPosting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface JobPostingDao extends JpaRepository<JobPosting,Integer> {
    List<JobPosting> getAllByApplicationDeadlineLessThanEqual(LocalDate date);
    List<JobPosting> getAllByEmployerId(int employerId);
    List<JobPosting> getAllByJobPostingConfirmation_IsConfirmed(boolean isConfirmed);
}
