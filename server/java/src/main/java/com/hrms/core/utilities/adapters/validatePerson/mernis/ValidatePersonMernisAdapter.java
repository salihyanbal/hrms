package com.hrms.core.utilities.adapters.validatePerson.mernis;

import com.hrms.core.utilities.adapters.validatePerson.ValidatePersonService;
import com.hrms.core.utilities.adapters.validatePerson.models.MernisPerson;
import com.hrms.services.mernis.MMHKPSPublicSoap;

public class ValidatePersonMernisAdapter implements ValidatePersonService {

    private MMHKPSPublicSoap mernis = new MMHKPSPublicSoap();

    @Override
    public boolean validate(MernisPerson person) {
        try {
            return mernis.TCKimlikNoDogrula(
                    Long.parseLong(person.getIdentificationNumber()),
                    person.getFirstName(),
                    person.getLastName(),
                    Integer.parseInt(person.getBirthYear()));
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

}
