package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.EmployerStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployerStatusDao extends JpaRepository<EmployerStatus,Integer> {
    List<EmployerStatus> getAllByEmployerId(int employerId);
    EmployerStatus getTopByEmployerIdOrderByIdDesc(int employerId);
}
