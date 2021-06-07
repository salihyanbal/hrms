package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateDao extends JpaRepository<Candidate,Integer> {
    Candidate getByIdentificationNumber(String identificationNumber);
}
