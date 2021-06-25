package com.hrms.entities.concretes;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Map;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@PrimaryKeyJoinColumn(name = "id")
@JsonIgnoreProperties({"hibernateLazyInitializer","handler","jobPostings"})
@Table(name="employers")
public class Employer extends User{

    @Column(name="company_name")
    @NotNull
    @NotBlank
    private String companyName;

    @Column(name="web_address")
    @NotNull
    @NotBlank
    private String webAddress;

    @Column(name="phone_number")
    @NotNull
    @NotBlank
    private String phoneNumber;

    @Column(name = "update")
    @Type(type = "json")
    private Map<String,Object> update;

    @OneToMany(mappedBy = "employer")
    private List<JobPosting> jobPostings;
}
