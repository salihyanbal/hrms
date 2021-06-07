package com.hrms.business.concretes;

import com.hrms.business.abstracts.UserService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.UserDao;
import com.hrms.entities.concretes.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserManager implements UserService {

    private UserDao userDao;

    @Autowired
    public UserManager(UserDao userDao) {
        this.userDao = userDao;
    }

    @Override
    public Result add(User user) {
        this.userDao.save(user);
        return new SuccessResult("Üye eklendi.");
    }

    @Override
    public DataResult<User> getByEmail(String email) {
        return new SuccessDataResult<>(this.userDao.getByEmail(email));
    }

    @Override
    public DataResult<List<User>> getAll() {
        return new SuccessDataResult<>(this.userDao.findAll(),"Üyeler listelendi.");
    }
}
