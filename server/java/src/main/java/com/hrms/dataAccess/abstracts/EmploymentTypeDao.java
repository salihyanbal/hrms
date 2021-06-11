package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.EmploymentType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmploymentTypeDao extends JpaRepository<EmploymentType,Integer> {
}
