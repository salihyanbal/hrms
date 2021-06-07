package com.hrms.business.concretes;

import com.hrms.business.abstracts.LinkTypeService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.LinkTypeDao;
import com.hrms.entities.concretes.LinkType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LinkTypeManager implements LinkTypeService {

    private LinkTypeDao linkTypeDao;

    public LinkTypeManager(LinkTypeDao linkTypeDao) {
        this.linkTypeDao = linkTypeDao;
    }

    @Override
    public Result add(LinkType linkType) {
        this.linkTypeDao.save(linkType);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<LinkType>> getAll() {
        return new SuccessDataResult<>(this.linkTypeDao.findAll());
    }
}
