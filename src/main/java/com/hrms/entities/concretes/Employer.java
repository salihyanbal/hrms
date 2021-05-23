package com.hrms.entities.concretes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.ExtensionMethod;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@PrimaryKeyJoinColumn(name = "id")
@Table(name="employers")
public class Employer extends User{

    @Column(name="company_name")
    private String companyName;

    @Column(name="web_address")
    private String webAddress;

    @Column(name="phone_number")
    private String phoneNumber;

    @Column(name="is_activated_by_employee")
    private boolean isActivatedByEmployee;
}
