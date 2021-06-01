package com.hrms.entities.dtos;

import com.hrms.entities.concretes.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CurriculumVitaeDto {
    private Candidate candidate;
    private List<CandidateEducation> candidateEducation;
    private List<CandidateExperience> candidateExperiences;
    private List<CandidateImage> candidateImage;
    private List<CandidateLanguage> candidateLanguage;
    private List<CandidateLink> candidateLink;
    private List<CandidateSkill> candidateSkill;
}
