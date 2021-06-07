package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.Candidate;
import com.hrms.entities.concretes.Employer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployerDao extends JpaRepository<Employer,Integer> {
}
