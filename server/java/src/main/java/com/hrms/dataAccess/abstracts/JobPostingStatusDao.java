package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.JobPostingStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobPostingStatusDao extends JpaRepository<JobPostingStatus,Integer> {
    List<JobPostingStatus> getAllByJobPostingId(int jobPostingId);
    JobPostingStatus getTopByJobPostingIdOrderByIdDesc(int jobPostingId);
}
