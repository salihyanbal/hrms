package com.hrms.dataAccess.abstracts;

import com.hrms.entities.concretes.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityDao extends JpaRepository<City,Integer> {
}
