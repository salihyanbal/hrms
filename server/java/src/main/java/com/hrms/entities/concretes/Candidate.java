package com.hrms.entities.concretes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@PrimaryKeyJoinColumn(name = "id")
@Table(name="candidates")
public class Candidate extends User{

    @Column(name = "first_name")
    @NotNull
    @NotBlank
    private String firstName;

    @Column(name = "last_name")
    @NotNull
    @NotBlank
    private String lastName;

    @Column(name = "identification_number")
    @NotNull
    @NotBlank
    private String identificationNumber;

    @Column(name = "birth_year")
    @NotNull
    @NotBlank
    private String birthYear;

    @Column(name = "cover_letter")
    private String coverLetter;

    @OneToMany(mappedBy = "candidate")
    @JsonIgnore()
    private List<CandidateEducation> candidateEducations;

    @OneToMany(mappedBy = "candidate")
    @JsonIgnore()
    private List<CandidateExperience> candidateExperiences;

    @OneToMany(mappedBy = "candidate")
    @JsonIgnore()
    private List<CandidateLanguage> candidateLanguages;

    @OneToMany(mappedBy = "candidate")
    @JsonIgnore()
    private List<CandidateLink> candidateLinks;

    @OneToMany(mappedBy = "candidate")
    @JsonIgnore()
    private List<CandidateSkill> candidateSkills;

    @OneToMany(mappedBy = "candidate")
    @JsonIgnore()
    private List<CandidateImage> candidateImages;

    @OneToMany(mappedBy = "candidate")
    @JsonIgnore()
    private List<CandidateJobPostingFavorite> candidateJobPostingFavorites;
}
