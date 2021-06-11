package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.CandidateImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CandidateImageDao extends JpaRepository<CandidateImage,Integer> {
    CandidateImage getByCandidateIdAndIsDeletedFalse(int candidateId);
}
