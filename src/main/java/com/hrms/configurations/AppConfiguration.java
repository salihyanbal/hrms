package com.hrms.configurations;

import com.hrms.core.utilities.adapters.validatePerson.ValidatePersonService;
import com.hrms.core.utilities.adapters.validatePerson.mernis.ValidatePersonMernisAdapter;
import com.hrms.core.utilities.mail.MailManager;
import com.hrms.core.utilities.mail.MailService;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfiguration {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        return modelMapper;
    }

    @Bean
    public ValidatePersonService validatePersonService(){
        return new ValidatePersonMernisAdapter();
    }

    @Bean
    public MailService mailService(){
        return new MailManager();
    }
}
