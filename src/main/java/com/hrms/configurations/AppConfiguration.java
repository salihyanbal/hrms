package com.hrms.configurations;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.hrms.core.utilities.adapters.validatePerson.ValidatePersonService;
import com.hrms.core.utilities.adapters.validatePerson.mernis.ValidatePersonMernisAdapter;
import com.hrms.core.utilities.imageService.ImageService;
import com.hrms.core.utilities.imageService.cloudinary.CloudinaryImageManager;
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

    @Bean
    public Cloudinary cloudinaryService(){
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "cloudlucifer",
                "api_key", "512327286838733",
                "api_secret", "zkH4cuzpD0JFIa5tnwCllI2wy40"));
    }

    @Bean
    public ImageService imageService(){
        return new CloudinaryImageManager(cloudinaryService());
    }
}
