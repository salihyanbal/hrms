package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.JobPostingConfirmation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobPostingConfirmationDao extends JpaRepository<JobPostingConfirmation,Integer> {
    JobPostingConfirmation getByJobPostingId(int jobPostingId);
}
