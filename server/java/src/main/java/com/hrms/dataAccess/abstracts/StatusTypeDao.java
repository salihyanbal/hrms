package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.StatusType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatusTypeDao extends JpaRepository<StatusType,Integer> {
    StatusType getByName(String name);
}
