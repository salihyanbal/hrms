package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.LinkType;

import java.util.List;

public interface LinkTypeService {
    Result add(LinkType linkType);
    DataResult<List<LinkType>> getAll();
}
