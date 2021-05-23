package com.hrms.business.concretes;

import com.hrms.business.abstracts.AuthService;
import com.hrms.business.abstracts.CandidateService;
import com.hrms.business.abstracts.EmployerService;
import com.hrms.business.abstracts.UserService;
import com.hrms.core.utilities.adapters.validatePerson.ValidatePersonService;
import com.hrms.core.utilities.adapters.validatePerson.models.MernisPerson;
import com.hrms.core.utilities.mail.MailService;
import com.hrms.core.utilities.results.ErrorResult;
import com.hrms.core.utilities.results.Result;
import com.hrms.core.utilities.results.SuccessResult;
import com.hrms.entities.concretes.Candidate;
import com.hrms.entities.concretes.Employer;
import com.hrms.entities.dtos.LoginForUserDto;
import com.hrms.entities.dtos.RegisterForCandidateDto;
import com.hrms.entities.dtos.RegisterForEmployerDto;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthManager implements AuthService {

    private UserService userService;
    private EmployerService employerService;
    private CandidateService candidateService;
    private ModelMapper modelMapper;
    private ValidatePersonService validatePersonService;
    private MailService mailService;

    @Autowired
    public AuthManager(UserService userService,
                       EmployerService employerService,
                       CandidateService candidateService,
                       ModelMapper modelMapper,
                       ValidatePersonService validatePersonService,
                       MailService mailService) {
        this.userService = userService;
        this.employerService = employerService;
        this.candidateService = candidateService;
        this.modelMapper = modelMapper;
        this.validatePersonService = validatePersonService;
        this.mailService = mailService;
    }

    @Override
    public Result registerForEmployer(RegisterForEmployerDto registerForEmployerDto) {
        if(registerForEmployerDto.getCompanyName() == null &&
                registerForEmployerDto.getWebsite() == null &&
                registerForEmployerDto.getPhoneNumber() == null &&
                registerForEmployerDto.getEmail() == null &&
                registerForEmployerDto.getPassword() == null &&
                checkEmployerDomain(registerForEmployerDto)){
            return new ErrorResult("Tüm bilgiler doldurulmalıdır.");
        }

        if(this.userService.getByEmail(registerForEmployerDto.getEmail()) != null){
            return new ErrorResult("Bu maile ait bi şirket zaten kayıtlı.");
        }

        mailService.send(registerForEmployerDto.getEmail());
        Employer employerForRegister = modelMapper.map(registerForEmployerDto,Employer.class)  ;
        employerService.add(employerForRegister);
        return new SuccessResult("Kullanıcı kaydoldu.");
    }

    @Override
    public Result registerForCandidate(RegisterForCandidateDto registerForJobSeekerDto) {
        if(registerForJobSeekerDto.getFirstName() == null &&
                registerForJobSeekerDto.getLastName() == null &&
                registerForJobSeekerDto.getIdentificationNumber() == null &&
                registerForJobSeekerDto.getBirthYear() == null &&
                registerForJobSeekerDto.getEmail() == null &&
                registerForJobSeekerDto.getPassword() == null){
            return new ErrorResult("Tüm bilgiler doldurulmalıdır.");
        }

        if(this.userService.getByEmail(registerForJobSeekerDto.getEmail()) != null &&
            this.candidateService.getByIdentificationNumber(registerForJobSeekerDto.getIdentificationNumber()) !=null){
            return new ErrorResult("Bu maile veya TC kimlik numarasına ait birisi zaten kayıtlı");
        }

        if(!validatePersonService.validate(modelMapper.map(registerForJobSeekerDto, MernisPerson.class))){
            return new ErrorResult("Kimlik doğrulanmadı");
        }

        mailService.send(registerForJobSeekerDto.getEmail());
        Candidate candidatesForRegister = modelMapper.map(registerForJobSeekerDto, Candidate.class);
        candidateService.add(candidatesForRegister);
        return new SuccessResult("Kullanıcı kaydoldu.");
    }

    @Override
    public Result login(LoginForUserDto loginForUserDto) {
        return new SuccessResult("Kullanıcı girişi başarılı.");
    }

    public boolean checkEmployerDomain(RegisterForEmployerDto registerForEmployerDto) {
        String mailDomain = registerForEmployerDto.getEmail().split("@")[1];
        return mailDomain.equals(registerForEmployerDto.getWebsite());
    }

}
