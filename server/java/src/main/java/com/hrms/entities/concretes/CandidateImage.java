package com.hrms.entities.concretes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="candidate_images")
public class CandidateImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "url")
    private String url;

    @Column(name = "uploaded_at")
    private LocalDate uploadedAt;

    @Column(name = "is_deleted")
    private boolean isDeleted;

    @ManyToOne()
    @JoinColumn(name = "candidate_id")
    private Candidate candidate;
}
