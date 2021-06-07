package com.hrms.entities.concretes;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="job_postings")
public class JobPosting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "job_description")
    @NotNull
    @NotBlank
    private String jobDescription;

    @Column(name = "min_salary")
    private Double minSalary;

    @Column(name = "max_salary")
    private Double maxSalary;

    @Column(name = "open_position_count")
    @NotNull
    @NotBlank
    private int openPositionCount;

    @Column(name = "published_at")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate publishedAt;

    @Column(name = "application_deadline")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate applicationDeadline;

    @Column(name = "is_active")
    private boolean isActive;

    @ManyToOne()
    @JoinColumn(name = "job_position_id")
    private JobPosition jobPosition;

    @ManyToOne()
    @JoinColumn(name = "employer_id")
    private Employer employer;

    @ManyToOne()
    @JoinColumn(name = "city_id")
    private City city;

}
