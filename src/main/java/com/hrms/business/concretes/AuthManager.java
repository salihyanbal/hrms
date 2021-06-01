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
        if(!checkEmployerDomain(registerForEmployerDto)){
            return new ErrorResult("Mail domaininiz şirket sitenizin domainiyle aynı olmak zorundadır.");
        }
        if(this.userService.getByEmail(registerForEmployerDto.getEmail()).getData() != null){
            return new ErrorResult("Bu maile ait bi şirket zaten kayıtlı.");
        }

        mailService.send(registerForEmployerDto.getEmail());
        Employer employerForRegister = modelMapper.map(registerForEmployerDto,Employer.class)  ;
        employerService.add(employerForRegister);
        return new SuccessResult("Kullanıcı kaydoldu.");
    }

    @Override
    public Result registerForCandidate(RegisterForCandidateDto registerForCandidateDto) {

        if(this.userService.getByEmail(registerForCandidateDto.getEmail()).getData() != null &&
            this.candidateService.getByIdentificationNumber(registerForCandidateDto.getIdentificationNumber()).getData() !=null){
            return new ErrorResult("Bu maile veya TC kimlik numarasına ait birisi zaten kayıtlı");
        }

        if(!validatePersonService.validate(modelMapper.map(registerForCandidateDto, MernisPerson.class))){
            return new ErrorResult("Kimlik doğrulanmadı");
        }

        mailService.send(registerForCandidateDto.getEmail());
        Candidate candidatesForRegister = modelMapper.map(registerForCandidateDto, Candidate.class);
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
