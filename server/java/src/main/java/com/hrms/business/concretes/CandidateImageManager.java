package com.hrms.business.concretes;

import com.hrms.business.abstracts.CandidateImageService;
import com.hrms.core.utilities.uploadService.imageUpload.ImageUploadService;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateImageDao;
import com.hrms.entities.concretes.CandidateImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@Service
public class CandidateImageManager implements CandidateImageService {

    private CandidateImageDao candidateImageDao;
    private ImageUploadService imageUploadService;

    @Autowired
    public CandidateImageManager(CandidateImageDao candidateImageDao, ImageUploadService imageUploadService) {
        this.candidateImageDao = candidateImageDao;
        this.imageUploadService = imageUploadService;
    }

    @Override
    public Result add(CandidateImage candidateImage) {
        this.candidateImageDao.save(candidateImage);
        return new SuccessResult();
    }

    @Override
    public Result change(CandidateImage candidateImage, MultipartFile file) {
        Map<String,?> result = (Map<String,?>) imageUploadService.save(file).getData();
        String url = (String) result.get("url");
        candidateImage.setUrl(url);
        candidateImage.setUploadedAt(LocalDate.now());
        if( this.getByCandidateIdAndNotDeleted(candidateImage.getCandidate().getId()).getData() != null){
            delete(candidateImage.getCandidate().getId());
        }

        return add(candidateImage);
    }

    @Override
    public Result delete(int candidateId) {
        CandidateImage candidateImageToDelete = getByCandidateIdAndNotDeleted(candidateId).getData();
        candidateImageToDelete.setDeleted(true);
        this.candidateImageDao.save(candidateImageToDelete);
        return new SuccessResult();
    }

    @Override
    public DataResult<List<CandidateImage>> getAll() {
        return new SuccessDataResult<>(this.candidateImageDao.findAll());
    }

    @Override
    public DataResult<CandidateImage> getByCandidateIdAndNotDeleted(int candidateId) {
        return new SuccessDataResult<>(this.candidateImageDao.getByCandidateIdAndIsDeletedFalse(candidateId));
    }

}
