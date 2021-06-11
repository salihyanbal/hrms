package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.City;

import java.util.List;

public interface CityService {
    Result add(City city);
    DataResult<List<City>> getAll();
}
