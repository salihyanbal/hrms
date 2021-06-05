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
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

@Configuration
public class AppConfiguration {

    Map<String, String> env = System.getenv();

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
                "cloud_name", env.get("cloudinary.cloud_name"),
                "api_key", env.get("cloudinary.api_key"),
                "api_secret", env.get("cloudinary.api_secret")));
    }

    @Bean
    public ImageUploadService imageService(){
        return new CloudinaryImageManager(cloudinaryService());
    }
}
