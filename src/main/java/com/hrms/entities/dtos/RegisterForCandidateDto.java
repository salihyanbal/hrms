package com.hrms.entities.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterForCandidateDto {

    private String firstName;
    private String lastName;
    private String identificationNumber;
    private String birthYear;
    private String email;
    private String password;
    private String passwordConfirm;

}
