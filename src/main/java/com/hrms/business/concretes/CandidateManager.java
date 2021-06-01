package com.hrms.business.concretes;

import com.hrms.business.abstracts.*;
import com.hrms.core.utilities.results.DataResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessDataResult;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.dataAccess.abstracts.CandidateDao;
import com.hrms.entities.concretes.*;
import com.hrms.entities.dtos.CurriculumVitaeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateManager implements CandidateService {

    private CandidateDao candidateDao;
    private CandidateEducationService candidateEducationDao;
    private CandidateExperienceService candidateExperienceDao;
    private CandidateImageService candidateImageDao;
    private CandidateLanguageService candidateLanguageDao;
    private CandidateLinkService candidateLinkDao;
    private CandidateSkillService candidateSkillServiceDao;

    @Autowired
    public CandidateManager(CandidateDao candidateDao, CandidateEducationService candidateEducationDao, CandidateExperienceService candidateExperienceDao, CandidateImageService candidateImageDao, CandidateLanguageService candidateLanguageDao, CandidateLinkService candidateLinkDao, CandidateSkillService candidateSkillServiceDao) {
        this.candidateDao = candidateDao;
        this.candidateEducationDao = candidateEducationDao;
        this.candidateExperienceDao = candidateExperienceDao;
        this.candidateImageDao = candidateImageDao;
        this.candidateLanguageDao = candidateLanguageDao;
        this.candidateLinkDao = candidateLinkDao;
        this.candidateSkillServiceDao = candidateSkillServiceDao;
    }

    @Override
    public Result add(Candidate candidates) {
        this.candidateDao.save(candidates);
        return new SuccessResult("İş arayan eklendi.");
    }

    @Override
    public DataResult<Candidate> getByIdentificationNumber(String identificationNumber) {
        return new SuccessDataResult<>(this.candidateDao.getByIdentificationNumber(identificationNumber));
    }

    @Override
    public DataResult<Candidate> getById(int id) {
        return new SuccessDataResult<>(this.candidateDao.findById(id).get());
    }

    @Override
    public DataResult<List<Candidate>> getAll() {
        return new SuccessDataResult<>(this.candidateDao.findAll());
    }

    @Override
    public DataResult<CurriculumVitaeDto> getCvByCandidateId(int candidateId) {
        CurriculumVitaeDto curriculumVitaeDto = new CurriculumVitaeDto();
        curriculumVitaeDto.setCandidate(this.getById(candidateId).getData());
        curriculumVitaeDto.setCandidateEducation(this.candidateEducationDao.getAllByCandidateIdOrderByGraduationYear(candidateId).getData());
        curriculumVitaeDto.setCandidateExperiences(this.candidateExperienceDao.getAllByCandidateIdOrderByLeaveDate(candidateId).getData());
        curriculumVitaeDto.setCandidateImage(this.candidateImageDao.getAllByCandidateId(candidateId).getData());
        curriculumVitaeDto.setCandidateLanguage(this.candidateLanguageDao.getAllByCandidateId(candidateId).getData());
        curriculumVitaeDto.setCandidateLink(this.candidateLinkDao.getAllByCandidateId(candidateId).getData());
        curriculumVitaeDto.setCandidateSkill(this.candidateSkillServiceDao.getAllByCandidateId(candidateId).getData());
        return new SuccessDataResult<>(curriculumVitaeDto);
    }

}
