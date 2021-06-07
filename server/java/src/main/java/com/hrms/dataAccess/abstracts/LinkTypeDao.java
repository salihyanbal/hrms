package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.LinkType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LinkTypeDao extends JpaRepository<LinkType,Integer> {
}
