package com.hrms.core.utilities.uploadService.imageUpload;

import com.hrms.core.utilities.results.DataResult;
import org.springframework.web.multipart.MultipartFile;


public interface ImageUploadService {
    DataResult<?> save(MultipartFile file);
}
