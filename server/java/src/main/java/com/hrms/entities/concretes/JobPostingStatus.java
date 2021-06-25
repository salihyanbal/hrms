package com.hrms.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="job_posting_statuses")
public class JobPostingStatus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @ManyToOne()
    @JoinColumn(name = "job_posting_id")
    private JobPosting jobPosting;

    @ManyToOne()
    @JoinColumn(name = "by_employee_id")
    private Employee employee;

    @ManyToOne()
    @JoinColumn(name = "status_type_id")
    private StatusType statusType;

}
