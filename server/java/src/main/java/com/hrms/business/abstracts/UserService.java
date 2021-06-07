package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.User;

import java.util.List;

public interface UserService {

    Result add(User user);
    DataResult<User> getByEmail(String email);
    DataResult<List<User>> getAll();

}
