package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.CandidateImage;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CandidateImageService {
    Result add(CandidateImage candidateImage);
    Result add(CandidateImage candidateImage, MultipartFile file);
    DataResult<List<CandidateImage>> getAll();
    DataResult<List<CandidateImage>> getAllByCandidateId(int candidateId);
}
