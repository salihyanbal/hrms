package com.hrms.core.utilities.adapters.validatePerson.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MernisPerson {

    private String firstName;
    private String lastName;
    private String identificationNumber;
    private String birthYear;
}
