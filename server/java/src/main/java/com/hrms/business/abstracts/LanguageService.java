package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.Language;

import java.util.List;

public interface LanguageService {
    Result add(Language language);
    DataResult<List<Language>> getAll();
}
