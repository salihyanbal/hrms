package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.CandidateEducation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CandidateEducationDao extends JpaRepository<CandidateEducation,Integer> {
    List<CandidateEducation> getAllByCandidateIdOrderByGraduationYear(int candidateId);
}
