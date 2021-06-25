package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.Employee;

import java.util.List;

public interface EmployeeService {
    Result save(Employee employee);
    DataResult<List<Employee>> getAll();
    DataResult<Employee> getById(int id);
}
