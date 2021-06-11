package com.hrms.business.abstracts;

import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.entities.concretes.CandidateImage;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CandidateImageService {
    Result add(CandidateImage candidateImage);
    Result change(CandidateImage candidateImage, MultipartFile file);
    Result delete(int candidateId);
    DataResult<List<CandidateImage>> getAll();
    DataResult<CandidateImage> getByCandidateIdAndNotDeleted(int candidateId);
}
