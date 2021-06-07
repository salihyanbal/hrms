package com.hrms.core.utilities.uploadService.imageUpload.cloudinary;

import com.cloudinary.*;
import com.cloudinary.utils.ObjectUtils;
import com.hrms.core.utilities.uploadService.imageUpload.ImageUploadService;
import com.hrms.core.utilities.results.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

public class CloudinaryImageManager implements ImageUploadService {

    private Cloudinary cloudinary;

    @Autowired
    public CloudinaryImageManager(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }

    @Override
    public DataResult<Map> save(MultipartFile file) {
        try {
            Map uploadResult = (Map<String,?>)cloudinary.uploader().upload(file.getBytes(),ObjectUtils.emptyMap());
            return new SuccessDataResult<Map>(uploadResult);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return new ErrorDataResult<Map>();
    }
}
