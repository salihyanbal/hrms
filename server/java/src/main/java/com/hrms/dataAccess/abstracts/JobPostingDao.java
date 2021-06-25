package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.JobPosting;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.time.LocalDate;
import java.util.List;

public interface JobPostingDao extends JpaRepository<JobPosting,Integer> {
    List<JobPosting> getAllByApplicationDeadlineLessThanEqual(LocalDate date);
    List<JobPosting> getAllByEmployerId(int employerId);
    List<JobPosting> getAllByEmployerIdAndIsDeletedFalse(int employerId);

    @Query("From JobPosting jp " +
            "inner join jp.jobPostingStatuses jps " +
            "left join jps.statusType status " +
            "where jps.id in " +
            "(select MAX(jps.id) from JobPosting jp join jp.jobPostingStatuses jps group by jp.id) " +
            "and status.id = :statusId")
    List<JobPosting> getAllByStatusId(int statusId);

    @Query("From JobPosting jp " +
            "inner join jp.jobPostingStatuses jps " +
            "left join jps.statusType status " +
            "where jps.id in " +
            "(select MAX(jps.id) from JobPosting jp join jp.jobPostingStatuses jps group by jp.id) " +
            "and status.id = :statusId")
    List<JobPosting> getAllByStatusId(int statusId, Pageable pageable);
}