package com.hrms.entities.dtos;

import com.hrms.entities.concretes.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CandidateResumeDto {
    private Candidate candidate;
    private CandidateImage candidateImage;
    private List<CandidateEducation> candidateEducations;
    private List<CandidateExperience> candidateExperiences;
    private List<CandidateLanguage> candidateLanguages;
    private List<CandidateLink> candidateLinks;
    private List<CandidateSkill> candidateSkills;
}
