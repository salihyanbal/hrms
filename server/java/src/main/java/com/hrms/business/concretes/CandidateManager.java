package com.hrms.business.concretes;

import com.hrms.business.abstracts.*;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateDao;
import com.hrms.entities.concretes.*;
import com.hrms.entities.dtos.CandidateResumeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateManager implements CandidateService {

    private CandidateDao candidateDao;
    private CandidateEducationService candidateEducationService;
    private CandidateExperienceService candidateExperienceService;
    private CandidateImageService candidateImageService;
    private CandidateLanguageService candidateLanguageService;
    private CandidateLinkService candidateLinkService;
    private CandidateSkillService candidateSkillService;

    @Autowired
    public CandidateManager(CandidateDao candidateDao, CandidateEducationService candidateEducationService, CandidateExperienceService candidateExperienceService, CandidateImageService candidateImageService, CandidateLanguageService candidateLanguageService, CandidateLinkService candidateLinkService, CandidateSkillService candidateSkillService) {
        this.candidateDao = candidateDao;
        this.candidateEducationService = candidateEducationService;
        this.candidateExperienceService = candidateExperienceService;
        this.candidateImageService = candidateImageService;
        this.candidateLanguageService = candidateLanguageService;
        this.candidateLinkService = candidateLinkService;
        this.candidateSkillService = candidateSkillService;
    }

    @Override
    public Result save(Candidate candidates) {
        this.candidateDao.save(candidates);
        return new SuccessResult("İşlem başarılı");
    }

    @Override
    public DataResult<Candidate> getByIdentificationNumber(String identificationNumber) {
        return new SuccessDataResult<>(this.candidateDao.getByIdentificationNumber(identificationNumber));
    }

    @Override
    public DataResult<Candidate> getById(int id) {
        return new SuccessDataResult<>(this.candidateDao.findById(id).orElse(null));
    }

    @Override
    public DataResult<List<Candidate>> getAll() {
        return new SuccessDataResult<>(this.candidateDao.findAll());
    }

    @Override
    public DataResult<CandidateResumeDto> getResumeByCandidateId(int candidateId) {
        CandidateResumeDto candidateResumeDto = new CandidateResumeDto();
        candidateResumeDto.setCandidate(this.getById(candidateId).getData());
        candidateResumeDto.setCandidateEducations(this.candidateEducationService.getAllByCandidateIdOrderByGraduationYear(candidateId).getData());
        candidateResumeDto.setCandidateExperiences(this.candidateExperienceService.getAllByCandidateIdOrderByLeaveDate(candidateId).getData());
        candidateResumeDto.setCandidateImage(this.candidateImageService.getByCandidateIdAndNotDeleted(candidateId).getData());
        candidateResumeDto.setCandidateLanguages(this.candidateLanguageService.getAllByCandidateId(candidateId).getData());
        candidateResumeDto.setCandidateLinks(this.candidateLinkService.getAllByCandidateId(candidateId).getData());
        candidateResumeDto.setCandidateSkills(this.candidateSkillService.getAllByCandidateId(candidateId).getData());
        return new SuccessDataResult<>(candidateResumeDto);
    }

}
