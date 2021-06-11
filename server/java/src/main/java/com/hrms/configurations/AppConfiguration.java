package com.hrms.configurations;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.hrms.core.utilities.adapters.validatePerson.ValidatePersonService;
import com.hrms.core.utilities.adapters.validatePerson.mernis.ValidatePersonMernisAdapter;
import com.hrms.core.utilities.uploadService.imageUpload.ImageUploadService;
import com.hrms.core.utilities.uploadService.imageUpload.cloudinary.CloudinaryImageManager;
import com.hrms.core.utilities.mail.MailManager;
import com.hrms.core.utilities.mail.MailService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

import java.util.Map;

@Configuration
public class AppConfiguration {

    @Autowired
    private Environment env;

    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
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
                "cloud_name", env.getProperty("cloudinary.cloud_name"),
                "api_key", env.getProperty("cloudinary.api_key"),
                "api_secret", env.getProperty("cloudinary.api_secret")));
    }

    @Bean
    public ImageUploadService imageService(){
        return new CloudinaryImageManager(cloudinaryService());
    }
}
