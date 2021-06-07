package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.CandidateLink;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CandidateLinkDao extends JpaRepository<CandidateLink,Integer> {
    List<CandidateLink> getAllByCandidateId(int candidateId);
}
